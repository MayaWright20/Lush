import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Protected guard={!false}>
        <Stack.Screen
          name="index"
          options={{
            headerShown: false,
            animation: "flip",
          }}
        />
      </Stack.Protected>
    </Stack>
  );
}
