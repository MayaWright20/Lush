import { router, useLocalSearchParams } from "expo-router";
import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import RenderHtml from "react-native-render-html";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

import CheckedBackground from "@/components/backgrounds/checked-background";
import CTA from "@/components/cta";
import { LushFont } from "@/components/lush-font";
import SoldOutLabel from "@/components/shop/sold-out-label";
import { COLORS } from "@/constants/colors";
import { PADDING_HORIZONTAL_PAGE } from "@/constants/styles";
import { Product as ProductType } from "@/types";
import { formatPrice } from "@/utils/formatters";

export default function Product() {
  const { product } = useLocalSearchParams<{
    product?: string;
  }>();

  const item: ProductType = product ? JSON.parse(product) : null;
  const html = item.description;

  const navigateBack = () => {
    router.back();
  };

  return (
    <CheckedBackground isOnlyBorders borderColor={COLORS.BLUE}>
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
            <View style={styles.detailsWrapper}>
              <LushFont style={styles.title}>{item.name}</LushFont>

              <LushFont style={styles.price}>
                £{formatPrice(item.maxPrice)}
              </LushFont>
              <View style={styles.categoritesWrapper}>
                <Text style={styles.category}>⚪️</Text>
                {item.category.map((item, index) => (
                  <Text key={index} style={styles.category}>
                    {` ${item} ⚪️`}
                  </Text>
                ))}
              </View>
              {html && (
                <RenderHtml
                  contentWidth={100}
                  source={{ html }}
                  baseStyle={styles.description}
                  tagsStyles={{
                    a: { textDecorationLine: "underline" },
                    b: { fontWeight: "bold" },
                    i: { fontStyle: "italic" },
                  }}
                />
              )}
            </View>
          </ScrollView>
        </SafeAreaView>
      </SafeAreaProvider>
    </CheckedBackground>
  );
}

const styles = StyleSheet.create({
  categoritesWrapper: {
    flexDirection: "row",
    justifyContent: "center",
  },
  category: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
    marginVertical: 10,
    textAlign: "center",
  },
  container: {
    flex: 1,
    paddingHorizontal: PADDING_HORIZONTAL_PAGE,
    position: "relative",
  },
  cta: {
    alignSelf: "baseline",
  },
  description: {
    color: "white",
    fontSize: 16,
  },
  detailsWrapper: {
    backgroundColor: "black",
    borderRadius: 15,
    borderWidth: 1,
    marginBottom: "20%",
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
  price: {
    color: "white",
    fontSize: 30,
    marginBottom: 15,
    textAlign: "right",
  },
  scrollView: {
    flex: 1,
  },
  title: {
    color: "white",
    fontSize: 40,
    marginBottom: 15,
    textAlign: "center",
  },
});
