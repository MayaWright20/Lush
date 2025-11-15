import {
  PermanentMarker_400Regular,
  useFonts,
} from "@expo-google-fonts/permanent-marker";
import React from "react";
import { StyleSheet, Text, TextProps } from "react-native";

export function LushFont(props: TextProps) {
  const [fontLoaded] = useFonts({
    LushFont: PermanentMarker_400Regular,
  });

  if (!fontLoaded) {
    return <Text {...props} style={styles.defaultFont} />;
  }
  return <Text {...props} style={[{ fontFamily: "LushFont" }, props.style]} />;
}

const styles = StyleSheet.create({
  defaultFont: {
    fontWeight: "bold",
    textDecorationLine: "underline",
  },
});
