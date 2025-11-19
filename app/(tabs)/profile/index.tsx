import { StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import CheckedBackground from "@/components/backgrounds/checked-background";
import CTA from "@/components/buttons/cta";
import Shop from "@/components/shop/shop";
import { COLORS } from "@/constants/colors";
import { PADDING_HORIZONTAL_PAGE } from "@/constants/styles";
import useProducts from "@/hooks/useProducts";
import useProfile from "@/hooks/useProfile";

export default function BasketPage() {
  const { basket, clearBasket, logout, hasProducts } = useProfile();

  const { products } = useProducts();

  const basketProducts =
    products?.filter(
      (product) => basket[product.id] && basket[product.id] > 0,
    ) || [];

  const handleClearBasket = () => {
    clearBasket();
  };

  return (
    <CheckedBackground isOnlyBorders borderColor={COLORS.BLUE}>
      <SafeAreaView style={styles.safeAreaView}>
        {hasProducts ? (
          <>
            <View style={styles.clearButtonContainer}>
              <CTA title="Clear Basket" onPress={handleClearBasket} />
            </View>

            <View style={styles.productsContainer}>
              <Shop products={basketProducts} />
            </View>
          </>
        ) : (
          <View style={styles.emptyContainer}>
            <Text style={styles.emptyText}>
              Start shopping to add items to your basket!
            </Text>
          </View>
        )}
      </SafeAreaView>
      <CTA
        touchableOpacityStyle={styles.cta}
        title={"Logout"}
        onPress={logout}
      />
    </CheckedBackground>
  );
}

const styles = StyleSheet.create({
  clearButtonContainer: {
    alignItems: "flex-end",
    marginVertical: 5,
    paddingHorizontal: PADDING_HORIZONTAL_PAGE,
  },
  cta: {
    alignSelf: "center",
    width: "90%",
  },
  emptyContainer: {
    alignItems: "center",
    flex: 1,
    justifyContent: "center",
    paddingHorizontal: PADDING_HORIZONTAL_PAGE,
  },
  emptyText: {
    fontSize: 18,
    textAlign: "center",
  },
  productsContainer: {
    flex: 1,
  },
  productsTitle: {
    fontSize: 20,
    marginBottom: 10,
    paddingHorizontal: PADDING_HORIZONTAL_PAGE,
    textAlign: "center",
  },
  safeAreaView: {
    flex: 1,
  },
  summary: {
    marginHorizontal: PADDING_HORIZONTAL_PAGE,
    marginTop: 10,
  },
});
