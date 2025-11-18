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

  const login = () => {
    setSessionToken("This is a fake token!");
  };

  const setUserNameHandler = (userName: string) => {
    setUserName(userName);
  };

  const logout = () => {
    clearStore();
  };

  return {
    login,
    logout,
    setUserName: setUserNameHandler,
    userName,
    sessionToken,
    favourites,
    setFavourites,
  };
}
