import { Stack } from "expo-router";
import { StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import CheckedBackground from "@/components/backgrounds/checked-background";
import { LushFont } from "@/components/lush-font";
import { COLORS } from "@/constants/colors";
import { PADDING_HORIZONTAL_PAGE } from "@/constants/styles";

export default function Layout() {
  return (
    <>
      <CheckedBackground
        isOnlyBorders
        borderColor={COLORS.BLUE}
        style={styles.header}
      >
        <SafeAreaView>
          <LushFont style={styles.logo}>Lush</LushFont>
        </SafeAreaView>
      </CheckedBackground>
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen
          name="index"
          options={{
            headerShown: false,
            animation: "flip",
          }}
        />
        <Stack.Screen
          name="[product]"
          options={{
            headerShown: false,
            animation: "slide_from_bottom",
          }}
        />
      </Stack>
    </>
  );
}
const styles = StyleSheet.create({
  header: {
    padding: PADDING_HORIZONTAL_PAGE,
    width: "100%",
  },
  logo: {
    fontSize: 32,
  },
});
