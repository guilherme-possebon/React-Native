import React, { useCallback, useEffect, useRef } from "react";
import { Text, StyleSheet, ListRenderItem, View, FlatList } from "react-native";
import {
  BottomSheetModal,
  BottomSheetView,
  BottomSheetModalProvider,
} from "@gorhom/bottom-sheet";
import { IContact } from "../../@types/contact";

interface IModal {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  participantesList: IContact[];
}

const Modal = ({ isOpen, setIsOpen, participantesList }: IModal) => {
  const bottomSheetModalRef = useRef<BottomSheetModal>(null);

  // Callbacks to open and close modal
  const open = useCallback(() => {
    bottomSheetModalRef.current?.present();
  }, []);

  const close = useCallback(() => {
    bottomSheetModalRef.current?.close();
  }, []);

  // Open/close the modal based on isOpen state
  useEffect(() => {
    if (isOpen) {
      open();
    } else {
      close();
    }
  }, [isOpen, open, close]); // Only run when `isOpen` changes

  // Handle sheet changes
  const handleSheetChanges = useCallback(
    (index: number) => {
      if (index === -1 && isOpen) {
        setIsOpen(false); // Close the modal when the sheet is snapped down
      } else if (index === 0 && !isOpen) {
        setIsOpen(true); // Open the modal when it's fully expanded
      }
      console.log("handleSheetChanges", index);
    },
    [isOpen, setIsOpen]
  ); // Add `isOpen` as a dependency to prevent unnecessary updates

  // Render the participants list item
  const renderItem: ListRenderItem<IContact> = ({ item }) => (
    <View style={styles.participantItem}>
      <Text>{item.id}</Text>
      <Text>{item.name}</Text>
      <Text>{item.number}</Text>
      <Text>{item.idFriend}</Text>
    </View>
  );

  return (
    <BottomSheetModalProvider>
      <BottomSheetModal
        ref={bottomSheetModalRef}
        onChange={handleSheetChanges}
        index={isOpen ? 0 : -1} // Set the index based on the modal state
        snapPoints={["50%", "90%"]} // Set the snap points for the modal
        enableContentPanningGesture={true} // Allow panning gestures to close the modal
      >
        <BottomSheetView style={styles.contentContainer}>
          {participantesList.length > 0 ? (
            <FlatList
              data={participantesList}
              renderItem={renderItem}
              keyExtractor={(item: IContact) => item.id.toString()}
              scrollEnabled={true}
              contentContainerStyle={styles.flatListContent} // Ensures the list grows and is scrollable
            />
          ) : (
            <Text style={styles.noParticipantsText}>
              No participants available
            </Text>
          )}
        </BottomSheetView>
      </BottomSheetModal>
    </BottomSheetModalProvider>
  );
};

const styles = StyleSheet.create({
  contentContainer: {
    // Remove flex: 1, so the BottomSheetView grows based on content
    alignItems: "center",
    paddingTop: 10,
    width: "100%", // Ensure it takes the full width of the screen
  },
  flatListContent: {
    flexGrow: 1, // Ensures FlatList grows to take up available space
    paddingBottom: 20, // Optional: adds padding to the bottom of the list
  },
  participantItem: {
    marginVertical: 8,
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
    width: "100%",
  },
  noParticipantsText: {
    textAlign: "center",
    marginTop: 20,
    fontSize: 16,
    color: "gray",
  },
});

export default Modal;
