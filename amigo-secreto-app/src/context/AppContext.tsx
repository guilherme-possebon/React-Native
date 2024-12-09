import { Children, createContext } from "react";
import { IUser } from "../@types/user";

export interface IContextProps {
  user: IUser;
  getUser: () => void;
  setBalance: (n: number) => void;
}

interface IProviderProps {
  children: React.ReactNode;
}

export const AppContext = createContext<IContextProps>({} as IContextProps);

export const AppProvider = ({ children }: IProviderProps) => {
  return <AppContext.Provider value={}>{children}</AppContext.Provider>;
};
