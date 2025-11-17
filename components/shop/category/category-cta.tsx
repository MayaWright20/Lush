import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

import LinearBackground from "@/components/backgrounds/linear-background";
import { COLORS } from "@/constants/colors";

interface Props {
  category: string;
  index: number;
}

function CategoryCTA({ category, index }: Props) {
  const colors = Object.values(COLORS).filter(
    (color) =>
      color !== COLORS.OVERLAY_DARK &&
      color !== COLORS.GREY_LIGHT &&
      color !== COLORS.GREY,
  );
  const color = colors[(index + 1) % colors.length];
  return (
    <TouchableOpacity style={styles.container}>
      <LinearBackground
        colors={["white", color]}
        style={styles.linearBackground}
      >
        <Text style={styles.title}>{category}</Text>
      </LinearBackground>
    </TouchableOpacity>
  );
}

export default React.memo(CategoryCTA);

const styles = StyleSheet.create({
  container: {
    borderRadius: 15,
    borderWidth: 1,
    flex: 1,
    marginHorizontal: 5,
    overflow: "hidden",
    width: 170,
  },
  linearBackground: {
    alignItems: "center",
    flex: 1,
    justifyContent: "center",
    width: "100%",
  },
  title: {
    fontWeight: "bold",
    padding: 20,
  },
});
