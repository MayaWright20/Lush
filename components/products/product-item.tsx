import { router } from "expo-router";
import { Image, StyleSheet, Text, TouchableOpacity } from "react-native";

import { COLORS } from "@/constants/colors";
import { width } from "@/constants/dimensions";
import { PADDING_HORIZONTAL_BTN } from "@/constants/styles";
import { Product } from "@/types";

import LinearBackground from "../backgrounds/linear-background";

export default function ProductItem({ item }: { item: Product }) {
  return (
    <TouchableOpacity
      onPress={() => {
        router.navigate({
          pathname: "/[id]",
          params: { id: item.id },
        });
      }}
      key={item.id}
      style={styles.container}
    >
      {!item.isAvailableForPurchase && (
        <Text style={styles.notAvaliable}>Sold out</Text>
      )}
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
  description: {
    color: "yellow",
  },
  image: {
    aspectRatio: 1,
    marginTop: -15,
    width: "100%",
  },
  notAvaliable: {
    alignSelf: "flex-end",
    backgroundColor: "black",
    borderRadius: 2,
    color: "white",
    fontWeight: "bold",
    paddingHorizontal: PADDING_HORIZONTAL_BTN,
    position: "absolute",
    textAlign: "center",
    textTransform: "capitalize",
    top: "62%",
    zIndex: 1,
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
