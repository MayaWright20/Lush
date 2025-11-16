import { useLocalSearchParams } from "expo-router";
import { Image, ScrollView, StyleSheet } from "react-native";

import CheckedBackground from "@/components/backgrounds/checked-background";
import LinearBackground from "@/components/backgrounds/linear-background";
import { LushFont } from "@/components/lush-font";
import SoldOutLabel from "@/components/products/sold-out-label";
import { COLORS } from "@/constants/colors";
import { PADDING_HORIZONTAL_PAGE } from "@/constants/styles";

export default function Product() {
  const { product } = useLocalSearchParams<{
    product?: string;
  }>();

  const item = product ? JSON.parse(product) : null;

  return (
    <CheckedBackground isOnlyBorders borderColor={COLORS.BLUE}>
      <SoldOutLabel isVisible={!item.isAvailableForPurchase} />
      <ScrollView style={styles.container}>
        <Image src={item.thumbnail.url} style={styles.image} />
        <LinearBackground style={styles.detailsWrapper}>
          <LushFont style={styles.title}>{item.name}</LushFont>
        </LinearBackground>
      </ScrollView>
    </CheckedBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    height: "100%",
    paddingHorizontal: PADDING_HORIZONTAL_PAGE,
  },
  detailsWrapper: {
    borderRadius: 15,
    borderWidth: 1,
    height: "100%",
    padding: 10,
    paddingTop: "30%",
    position: "absolute",
    top: "60%",
    width: "100%",
    zIndex: -1,
  },
  image: {
    aspectRatio: 1,
    width: "100%",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
  },
});
