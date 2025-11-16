import { StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import CheckedBackground from "@/components/backgrounds/checked-background";
import { LushFont } from "@/components/lush-font";
import Products from "@/components/products/shop";
import { COLORS } from "@/constants/colors";
import { PADDING_HORIZONTAL_PAGE } from "@/constants/styles";

export default function Index() {
  return (
    <>
      <CheckedBackground
        isOnlyBorders
        borderColor={COLORS.BLUE}
        inputHeight={125}
        style={styles.header}
      >
        <SafeAreaView>
          <LushFont style={styles.logo}>Lush</LushFont>
        </SafeAreaView>
      </CheckedBackground>
      <Products />
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
