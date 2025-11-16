import { Stack } from "expo-router";

import { PersistStoreState, usePersistStore } from "@/store/store";

export default function RootLayout() {
  const sessionToken = usePersistStore(
    (state: PersistStoreState) => state.sessionToken,
  );

  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Protected guard={!sessionToken}>
        <Stack.Screen
          name="index"
          options={{
            headerShown: false,
            animation: "flip",
          }}
        />
        <Stack.Screen
          name="auth"
          options={{
            headerShown: false,
            animation: "slide_from_right",
          }}
        />
      </Stack.Protected>
      <Stack.Protected guard={!!sessionToken}>
        <Stack.Screen
          name="(authenticated)"
          options={{
            headerShown: false,
            animation: "slide_from_bottom",
          }}
        />
      </Stack.Protected>
    </Stack>
  );
}
