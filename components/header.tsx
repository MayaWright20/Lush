import { StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { COLORS } from "@/constants/colors";
import { FONT_SIZE_HEADER, PADDING_HORIZONTAL_PAGE } from "@/constants/styles";

import CheckedBackground from "./backgrounds/checked-background";
import { LushFont } from "./lush-font";

export default function Header() {
  return (
    <CheckedBackground isOnlyBorders borderColor={COLORS.BLUE}>
      <SafeAreaView style={styles.container}>
        <LushFont style={styles.title}>Header</LushFont>
      </SafeAreaView>
    </CheckedBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#ffc0cb9c",
    justifyContent: "center",
    padding: PADDING_HORIZONTAL_PAGE,
  },
  title: {
    fontSize: FONT_SIZE_HEADER,
  },
});
