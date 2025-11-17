import AsyncStorage from "@react-native-async-storage/async-storage";
import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

import { Product } from "@/types";

export interface StoreState {
  products?: Product[];
  setProducts: (products: Product[]) => void;
}

export const useStore = create<StoreState>((set, get) => ({
  products: undefined,
  setProducts: (products: Product[]) => set(() => ({ products })),
}));

export interface PersistStoreState {
  sessionToken: string | null;
  setSessionToken: (sessionToken: string | null) => void;
  userName: string | undefined;
  setUserName: (userName: string) => void;
  clearStore: () => Promise<void>;
}

const sessionStorage = {
  getItem: async (name: string): Promise<string | null> => {
    const data = (await AsyncStorage.getItem(name)) || null;
    return data;
  },
  setItem: async (name: string, value: string): Promise<void> => {
    await AsyncStorage.setItem(name, value);
  },
  removeItem: async (name: string): Promise<void> => {
    await AsyncStorage.removeItem(name);
  },
  clearStore: async (): Promise<void> => {
    await AsyncStorage.clear();
  },
};

export const usePersistStore = create<PersistStoreState>()(
  persist(
    (set, get) => ({
      sessionToken: null,
      setSessionToken: (sessionToken: string | null) => set({ sessionToken }),
      userName: undefined,
      setUserName: (userName: string) => set({ userName }),
      clearStore: async () => {
        await sessionStorage.clearStore();
        set({
          sessionToken: null,
          userName: undefined,
        });
      },
    }),
    {
      name: "session",
      storage: createJSONStorage(() => sessionStorage),
    },
  ),
);
