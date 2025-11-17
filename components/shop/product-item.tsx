import { router } from "expo-router";
import React from "react";
import { Image, StyleSheet, TouchableOpacity } from "react-native";

import { COLORS } from "@/constants/colors";
import { height, width } from "@/constants/dimensions";
import { Product } from "@/types";

import LinearBackground from "../backgrounds/linear-background";
import { LushFont } from "../lush-font";

import SoldOutLabel from "./sold-out-label";

function ProductItem({ item }: { item: Product }) {
  const naviateToProduct = () => {
    router.push({
      pathname: "/[id]",
      params: {
        id: item.slug,
        product: JSON.stringify(item),
      },
    });
  };

  return (
    <TouchableOpacity onPress={naviateToProduct} style={styles.container}>
      <SoldOutLabel isVisible={!item.isAvailableForPurchase} />
      <Image src={item.thumbnail && item.thumbnail.url} style={styles.image} />
      <LinearBackground
        colors={["white", COLORS.YELLOW]}
        style={styles.wrapper}
      >
        <LushFont numberOfLines={5} style={styles.title}>
          {item.name}
        </LushFont>
      </LinearBackground>
    </TouchableOpacity>
  );
}

export default React.memo(ProductItem);

const styles = StyleSheet.create({
  container: {
    height: height / 3.5,
    margin: 5,
    marginVertical: 5,
    width: width / 2.1,
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
    marginTop: "-50%",
    overflow: "hidden",
    padding: 10,
    paddingTop: "50%",
    position: "relative",
    top: "0%",
    width: "98%",
    zIndex: -1,
  },
});
