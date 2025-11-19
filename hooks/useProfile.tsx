import { useMemo } from "react";

import { PersistStoreState, usePersistStore } from "@/store/store";

export default function useProfile() {
  const setSessionToken = usePersistStore(
    (state: PersistStoreState) => state.setSessionToken,
  );

  const clearStore = usePersistStore(
    (state: PersistStoreState) => state.clearStore,
  );

  const sessionToken = usePersistStore(
    (state: PersistStoreState) => state.sessionToken,
  );

  const setUserName = usePersistStore(
    (state: PersistStoreState) => state.setUserName,
  );

  const userName = usePersistStore(
    (state: PersistStoreState) => state.userName,
  );
  const favourites = usePersistStore(
    (state: PersistStoreState) => state.favourites,
  );
  const setFavourites = usePersistStore(
    (state: PersistStoreState) => state.setFavourites,
  );
  const basket = usePersistStore((state: PersistStoreState) => state.basket);
  const setBasket = usePersistStore(
    (state: PersistStoreState) => state.setBasket,
  );
  const removeFromBasket = usePersistStore(
    (state: PersistStoreState) => state.removeFromBasket,
  );
  const clearBasket = usePersistStore(
    (state: PersistStoreState) => state.clearBasket,
  );

  const login = () => {
    setSessionToken("This is a fake token!");
  };

  const setUserNameHandler = (userName: string) => {
    setUserName(userName);
  };

  const logout = () => {
    clearStore();
  };

  const userBasket = useMemo(() => {
    return userName ? basket[userName] || {} : {};
  }, [basket, userName]);

  const totalItems = useMemo(() => {
    return Object.values(userBasket).reduce(
      (sum, quantity) => sum + quantity,
      0,
    );
  }, [userBasket]);

  const totalUniqueProducts = useMemo(() => {
    return Object.keys(userBasket).length;
  }, [userBasket]);

  const getProductQuantity = (productId: string) => {
    return userBasket[productId] || 0;
  };

  const hasProducts = totalItems > 0;

  return {
    basket: userBasket,
    totalItems,
    totalUniqueProducts,
    getProductQuantity,
    hasProducts,
    setBasket,
    removeFromBasket,
    clearBasket,
    login,
    logout,
    setUserName: setUserNameHandler,
    userName,
    sessionToken,
    favourites,
    setFavourites,
  };
}
