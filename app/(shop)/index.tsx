import { StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import LinearBackground from "@/components/backgrounds/linear-background";
import { LushFont } from "@/components/lush-font";
import { PADDING_HORIZONTAL_PAGE } from "@/constants/styles";

export default function Index() {
  return (
    <LinearBackground style={styles.header}>
      <SafeAreaView>
        <LushFont style={styles.logo}>Lush</LushFont>
      </SafeAreaView>
    </LinearBackground>
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
