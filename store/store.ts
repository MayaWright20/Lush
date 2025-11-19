import AsyncStorage from "@react-native-async-storage/async-storage";
import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

import { Product } from "@/types";

type FavouritesDataBase = Record<string, string[]>;
type BasketDataBase = Record<string, Record<string, number>>;

export interface StoreState {
  products?: Product[];
  setProducts: (products: Product[]) => void;
  categories?: string[];
  setCategories: (categories: string[]) => void;
  filteredProducts?: Product[];
  setFilteredProducts: (filter: string) => void;
  searchWord: string | undefined;
  setSearchWord: (searchWord: string | undefined) => void;
  hasResults: boolean;
  setHasResults: (hasResults: boolean) => void;
}

export const useStore = create<StoreState>((set, get) => ({
  products: undefined,
  setProducts: (products: Product[]) => set(() => ({ products })),
  searchWord: undefined,
  setSearchWord: (searchWord: string | undefined) =>
    set(() => ({ searchWord })),
  categories: undefined,
  setCategories: (categories: string[]) => set(() => ({ categories })),
  filteredProducts: undefined,
  setFilteredProducts: (filter: string) =>
    set((state: StoreState) => {
      const filtered =
        state.products?.filter(
          (product) =>
            product.name?.toLowerCase().includes(filter.toLowerCase()) ||
            product.category?.some((cat) =>
              cat.toLowerCase().includes(filter.toLowerCase()),
            ) ||
            product.description?.toLowerCase().includes(filter.toLowerCase()),
        ) || [];

      return {
        filteredProducts: filtered,
        hasResults: filtered.length > 0,
      };
    }),
  hasResults: true,
  setHasResults: (hasResults: boolean) => set(() => ({ hasResults })),
}));

export interface PersistStoreState {
  sessionToken: string | null;
  setSessionToken: (sessionToken: string | null) => void;
  userName: string | undefined;
  setUserName: (userName: string) => void;
  clearStore: () => Promise<void>;
  favourites: FavouritesDataBase;
  setFavourites: (favourites: string) => void;
  basket: BasketDataBase;
  setBasket: (productId: string, quantity?: number) => void;
  removeFromBasket: (productId: string) => void;
  clearBasket: () => void;
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
      favourites: {},
      setFavourites: (favourite: string) =>
        set((state) => {
          if (!state.userName) return {};

          const userFavourites = state.favourites[state.userName] || [];
          const exists = userFavourites.includes(favourite);

          return {
            favourites: {
              ...state.favourites,
              [state.userName]: exists
                ? userFavourites.filter((item) => item !== favourite)
                : [...userFavourites, favourite],
            },
          };
        }),
      basket: {},
      setBasket: (productId: string, quantity: number = 1) =>
        set((state) => {
          if (!state.userName) return {};

          const userBasket = state.basket[state.userName] || {};
          const currentQuantity = userBasket[productId] || 0;
          const newQuantity = currentQuantity + quantity;

          return {
            basket: {
              ...state.basket,
              [state.userName]: {
                ...userBasket,
                [productId]: newQuantity > 0 ? newQuantity : 0,
              },
            },
          };
        }),
      removeFromBasket: (productId: string) =>
        set((state) => {
          if (!state.userName) return {};

          const userBasket = state.basket[state.userName] || {};
          const { [productId]: removed, ...remainingItems } = userBasket;

          return {
            basket: {
              ...state.basket,
              [state.userName]: remainingItems,
            },
          };
        }),
      clearBasket: () =>
        set((state) => {
          if (!state.userName) return {};

          return {
            basket: {
              ...state.basket,
              [state.userName]: {},
            },
          };
        }),
      userName: undefined,
      setUserName: (userName: string) => set({ userName }),
      clearStore: async () => {
        await sessionStorage.clearStore();
        set({
          sessionToken: null,
          userName: undefined,
          favourites: {},
          basket: {},
        });
      },
    }),
    {
      name: "session",
      storage: createJSONStorage(() => sessionStorage),
    },
  ),
);
