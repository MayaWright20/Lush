import { router, Stack } from "expo-router";
import { Pressable, StyleSheet, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import CheckedBackground from "@/components/backgrounds/checked-background";
import { LushFont } from "@/components/lush-font";
import { COLORS } from "@/constants/colors";
import { PADDING_HORIZONTAL_PAGE } from "@/constants/styles";
import { StoreState, useStore } from "@/store/store";

export default function Layout() {
  const setFilteredProducts = useStore(
    (state: StoreState) => state.setFilteredProducts,
  );
  const navigateToShop = () => {
    setFilteredProducts("");
    router.navigate("/(shop)/");
  };

  return (
    <View style={styles.container}>
      <CheckedBackground
        isOnlyBorders
        borderColor={COLORS.BLUE}
        style={styles.container}
      >
        <SafeAreaView>
          <Pressable onPress={navigateToShop}>
            <LushFont style={styles.logo}>Lush</LushFont>
          </Pressable>
        </SafeAreaView>
        <Stack screenOptions={{ headerShown: false }}>
          <Stack.Screen
            name="index"
            options={{
              headerShown: false,
              animation: "flip",
            }}
          />
          <Stack.Screen
            name="[id]"
            options={{
              headerShown: false,
              animation: "slide_from_bottom",
            }}
          />
        </Stack>
      </CheckedBackground>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  logo: {
    fontSize: 32,
    padding: PADDING_HORIZONTAL_PAGE,
  },
});
