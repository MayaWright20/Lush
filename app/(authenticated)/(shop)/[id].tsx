import { useLocalSearchParams } from "expo-router";
import { Image, ScrollView, StyleSheet } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

import CheckedBackground from "@/components/backgrounds/checked-background";
import LinearBackground from "@/components/backgrounds/linear-background";
import { LushFont } from "@/components/lush-font";
import SoldOutLabel from "@/components/shop/sold-out-label";
import { COLORS } from "@/constants/colors";
import { PADDING_HORIZONTAL_PAGE } from "@/constants/styles";
import { RenderedHtml } from "@/utils/render-html";

export default function Product() {
  const { product } = useLocalSearchParams<{
    product?: string;
  }>();

  const item = product ? JSON.parse(product) : null;

  console.log("lksadjfl", typeof item.description);

  return (
    <>
      <CheckedBackground borderColor={COLORS.BLUE} isOnlyBorders />
      <SafeAreaProvider>
        <SafeAreaView style={styles.container} edges={["top"]}>
          <SoldOutLabel isVisible={!item.isAvailableForPurchase} />
          <ScrollView style={styles.scrollView}>
            <Image src={item.thumbnail.url} style={styles.image} />

            <LinearBackground
              // isFullScreen
              colors={["white", COLORS.YELLOW]}
              style={styles.detailsWrapper}
            >
              <LushFont style={styles.title}>{item.name}</LushFont>
              <RenderedHtml sentence={item.description} />
            </LinearBackground>
          </ScrollView>
        </SafeAreaView>
      </SafeAreaProvider>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: PADDING_HORIZONTAL_PAGE,
    position: "relative",
  },
  detailsWrapper: {
    borderRadius: 15,
    borderWidth: 1,
    marginTop: "-50%",
    padding: 10,
    paddingTop: "40%",
    width: "100%",
    zIndex: -1,
  },
  image: {
    aspectRatio: 1,
    width: "100%",
  },
  scrollView: {
    flex: 1,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
  },
});
