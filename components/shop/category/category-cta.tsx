import React from "react";
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  useWindowDimensions,
} from "react-native";

import LinearBackground from "@/components/backgrounds/linear-background";
import { COLORS } from "@/constants/colors";
import useProducts from "@/hooks/useProducts";
import { HapticFeedBack } from "@/utils/haptic-feedback";

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
  const { setFilteredProducts, setSearchWord, setHasResults } = useProducts();
  const { width } = useWindowDimensions();

  const onPress = () => {
    HapticFeedBack();
    setSearchWord(undefined);
    setFilteredProducts(category);
    setHasResults(true);
  };

  return (
    <TouchableOpacity
      style={[styles.container, { width: width / 2.2 }]}
      onPress={onPress}
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
    marginHorizontal: 4,
    overflow: "hidden",
  },
  linearBackground: {
    alignItems: "center",
    height: "100%",
    justifyContent: "center",
    width: "100%",
  },
  title: {
    fontWeight: "bold",
  },
});
