import { PersistStoreState, usePersistStore } from "@/store/store";
import { Stack } from "expo-router";

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
      </Stack.Protected>
      <Stack.Protected guard={!!sessionToken}>
        <Stack.Screen
          name="(shop)"
          options={{
            headerShown: false,
            animation: "slide_from_left",
          }}
        />
      </Stack.Protected>
    </Stack>
  );
}
