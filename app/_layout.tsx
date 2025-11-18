import { Stack } from "expo-router";
import { SafeAreaProvider } from "react-native-safe-area-context";

import useProfile from "@/hooks/useProfile";

export default function RootLayout() {
  const { sessionToken } = useProfile();

  return (
    <SafeAreaProvider>
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Protected guard={!sessionToken}>
          <Stack.Screen
            name="(auth)"
            options={{
              headerShown: false,
              animation: "flip",
            }}
          />
        </Stack.Protected>
        <Stack.Protected guard={!!sessionToken}>
          <Stack.Screen
            name="(tabs)"
            options={{
              headerShown: false,
              animation: "slide_from_bottom",
            }}
          />
          <Stack.Screen
            name="product/[id]"
            options={{
              headerShown: false,
              title: "Product",
              animation: "slide_from_bottom",
            }}
          />
        </Stack.Protected>
      </Stack>
    </SafeAreaProvider>
  );
}
