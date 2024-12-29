import React, { useCallback, useEffect, useRef } from "react";
import { Text, StyleSheet, ListRenderItem, View, FlatList } from "react-native";
import {
  BottomSheetModal,
  BottomSheetView,
  BottomSheetModalProvider,
  BottomSheetVirtualizedList,
  BottomSheetFlatList,
} from "@gorhom/bottom-sheet";
import { IContact } from "../../@types/contact";
import { GestureHandlerRootView } from "react-native-gesture-handler";

interface IModal {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  participantesList: IContact[];
}

const Modal = ({ isOpen, setIsOpen, participantesList }: IModal) => {
  const bottomSheetModalRef = useRef<BottomSheetModal>(null);

  const open = useCallback(() => {
    bottomSheetModalRef.current?.present();
  }, []);

  const close = useCallback(() => {
    bottomSheetModalRef.current?.close();
  }, []);

  useEffect(() => {
    if (isOpen) {
      open();
    } else {
      close();
    }
  }, [isOpen, open, close]);

  const handleSheetChanges = useCallback(
    (index: number) => {
      if (index === -1 && isOpen) {
        setIsOpen(false);
      } else if (index === 0 && !isOpen) {
        setIsOpen(true);
      }
    },
    [isOpen, setIsOpen]
  );

  const renderItem: ListRenderItem<IContact> = ({ item }) => (
    <View style={styles.participantItem}>
      <Text>id: {item.id}</Text>
      <Text>nome: {item.name}</Text>
      <Text>numero: {item.number}</Text>
      <Text>Id do amigo: {item.idFriend}</Text>
    </View>
  );

  return (
    <BottomSheetModalProvider>
      <BottomSheetModal
        ref={bottomSheetModalRef}
        onChange={handleSheetChanges}
        index={isOpen ? 0 : -1}
        snapPoints={["50%", "90%"]}
        enableContentPanningGesture={true}
        enableDynamicSizing
      >
        {participantesList.length > 0 ? (
          <BottomSheetFlatList
            data={participantesList}
            renderItem={renderItem}
            keyExtractor={(item: IContact) => item.id.toString()}
            contentContainerStyle={styles.flatListContent}
            scrollEnabled
          />
        ) : (
          <Text style={styles.noParticipantsText}>
            No participants available
          </Text>
        )}
      </BottomSheetModal>
    </BottomSheetModalProvider>
  );
};

const styles = StyleSheet.create({
  contentContainer: {
    alignItems: "center",
    paddingTop: 10,
    width: "100%",
  },
  flatListContent: {
    flexGrow: 1,
    paddingBottom: 20,
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
