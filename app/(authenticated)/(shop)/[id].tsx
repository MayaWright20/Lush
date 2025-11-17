import { useLocalSearchParams } from "expo-router";
import { Image, ScrollView, StyleSheet } from "react-native";
import RenderHtml from "react-native-render-html";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

import CheckedBackground from "@/components/backgrounds/checked-background";
import LinearBackground from "@/components/backgrounds/linear-background";
import { LushFont } from "@/components/lush-font";
import SoldOutLabel from "@/components/shop/sold-out-label";
import { COLORS } from "@/constants/colors";
import { PADDING_HORIZONTAL_PAGE } from "@/constants/styles";

export default function Product() {
  const { product } = useLocalSearchParams<{
    product?: string;
  }>();

  const item = product ? JSON.parse(product) : null;

  console.log("lksadjfl", typeof item.description);

  const html = item.description;
  // const html = `<b>How to use:<br></b>Up the ante with our first ever vitamin C product. This dual-use foaming facial scrub is made with vitamin C powder for its anti-oxidant and anti-inflammatory qualities. This exfoliating face scrub has a 10% vitamin C formula, which may tingle during use as it exfoliates dead skin cells. For maximum effect, use as a mask and apply to a clean, dry face, leaving for 1-2 minutes. Rinse off with water and pat dry. For a more gentle experience, use as a foaming face wash by scooping out a small amount and adding a little water. Apply to the face in gentle, circular motions before rinsing away. As it foams when washing off you’ll also notice it changes colour from deep purple to light pink -&nbsp; leaving you looking radiant.`;

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
