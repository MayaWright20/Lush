import { PersistStoreState, usePersistStore } from "@/store/store";

export default function useProfile() {
  const setSessionToken = usePersistStore(
    (state: PersistStoreState) => state.setSessionToken
  );

  const login = () => {
    setSessionToken("This is a fake token.");
  };

  const logout = () => {
    setSessionToken(null);
  };

  return {
    login,
    logout,
  };
}
