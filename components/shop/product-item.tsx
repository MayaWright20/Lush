import { router } from "expo-router";
import { Image, StyleSheet, Text, TouchableOpacity } from "react-native";

import { COLORS } from "@/constants/colors";
import { width } from "@/constants/dimensions";
import { Product } from "@/types";

import LinearBackground from "../backgrounds/linear-background";

import SoldOutLabel from "./sold-out-label";

export default function ProductItem({ item }: { item: Product }) {
  const naviateToProduct = () => {
    router.push({
      pathname: "/[id]",
      params: {
        id: item.id,
        product: JSON.stringify(item),
      },
    });
  };

  return (
    <TouchableOpacity
      onPress={naviateToProduct}
      key={item.id}
      style={styles.container}
    >
      <SoldOutLabel isVisible={!item.isAvailableForPurchase} />
      <Image src={item.thumbnail && item.thumbnail.url} style={styles.image} />
      <LinearBackground
        colors={["white", COLORS.YELLOW]}
        style={styles.wrapper}
      >
        <Text numberOfLines={2} style={styles.title}>
          {item.name}
        </Text>
      </LinearBackground>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    height: width / 2,
    margin: 5,
    width: width / 2.2,
  },
  image: {
    aspectRatio: 1,
    marginTop: -15,
    width: "100%",
  },
  title: {
    fontWeight: "bold",
    textAlign: "center",
  },
  wrapper: {
    backgroundColor: "white",
    borderRadius: 15,
    borderWidth: 1,
    flexGrow: 1,
    height: "70%",
    marginTop: "-55%",
    overflow: "hidden",
    padding: 10,
    paddingTop: "50%",
    position: "relative",
    top: "0%",
    width: "98%",
    zIndex: -1,
  },
});
