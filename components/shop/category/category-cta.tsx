import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

import LinearBackground from "@/components/backgrounds/linear-background";
import { COLORS } from "@/constants/colors";
import { width } from "@/constants/dimensions";
import { StoreState, useStore } from "@/store/store";

interface Props {
  category: string;
  index: number;
}

function CategoryCTA({ category, index }: Props) {
  const setFilteredProducts = useStore(
    (state: StoreState) => state.setFilteredProducts,
  );
  const colors = Object.values(COLORS).filter(
    (color) =>
      color !== COLORS.OVERLAY_DARK &&
      color !== COLORS.GREY_LIGHT &&
      color !== COLORS.GREY,
  );
  const color = colors[(index + 1) % colors.length];

  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => setFilteredProducts(category)}
    >
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
    width: width / 2.1,
  },
  linearBackground: {
    alignItems: "center",
    height: "100%",
    justifyContent: "center",
    width: "100%",
  },
  title: {
    fontWeight: "bold",
    padding: 20,
  },
});
