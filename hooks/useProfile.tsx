import { PersistStoreState, usePersistStore } from "@/store/store";

export default function useProfile() {
  const setSessionToken = usePersistStore(
    (state: PersistStoreState) => state.setSessionToken,
  );

  const clearStore = usePersistStore(
    (state: PersistStoreState) => state.clearStore,
  );

  const setUserName = usePersistStore(
    (state: PersistStoreState) => state.setUserName,
  );

  const userName = usePersistStore(
    (state: PersistStoreState) => state.userName,
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
  };
}
