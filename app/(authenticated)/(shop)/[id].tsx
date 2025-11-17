import { router, useLocalSearchParams } from "expo-router";
import { Image, ScrollView, StyleSheet } from "react-native";
import RenderHtml from "react-native-render-html";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

import CheckedBackground from "@/components/backgrounds/checked-background";
import LinearBackground from "@/components/backgrounds/linear-background";
import CTA from "@/components/cta";
import { LushFont } from "@/components/lush-font";
import SoldOutLabel from "@/components/shop/sold-out-label";
import { COLORS } from "@/constants/colors";
import { PADDING_HORIZONTAL_PAGE } from "@/constants/styles";

export default function Product() {
  const { product } = useLocalSearchParams<{
    product?: string;
  }>();

  const item = product ? JSON.parse(product) : null;
  const html = item.description;

  const navigateBack = () => {
    router.back();
  };

  return (
    <>
      <CheckedBackground borderColor={COLORS.BLUE} isOnlyBorders />
      <SafeAreaProvider>
        <SafeAreaView style={styles.container} edges={["top"]}>
          <SoldOutLabel isVisible={!item.isAvailableForPurchase} />
          <ScrollView style={styles.scrollView}>
            <CTA
              touchableOpacityStyle={styles.cta}
              title={"Back"}
              onPress={navigateBack}
            />
            <Image src={item.thumbnail.url} style={styles.image} />
            <LinearBackground
              colors={["white", COLORS.YELLOW]}
              style={styles.detailsWrapper}
            >
              <LushFont style={styles.title}>{item.name}</LushFont>
              <RenderHtml
                contentWidth={100}
                source={{ html }}
                tagsStyles={{
                  a: { textDecorationLine: "underline" },
                  b: { fontWeight: "bold" },
                  i: { fontStyle: "italic" },
                }}
              />
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
  cta: {
    alignSelf: "baseline",
  },
  detailsWrapper: {
    borderRadius: 15,
    borderWidth: 1,
    marginTop: "-50%",
    minHeight: "65%",
    padding: 10,
    paddingBottom: 40,
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
    marginBottom: 15,
    textAlign: "center",
  },
});
