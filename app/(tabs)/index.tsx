import { StyleSheet, View } from "react-native";

import CheckedBackground from "@/components/backgrounds/checked-background";
import { LushFont } from "@/components/lush-font";
import Categories from "@/components/shop/category/categories";
import Shop from "@/components/shop/shop";
import { COLORS } from "@/constants/colors";
import { PADDING_HORIZONTAL_PAGE } from "@/constants/styles";
import useProducts from "@/hooks/useProducts";

export default function Index() {
  const { products, categories, setSearchWord, hasResults } = useProducts();

  return (
    <CheckedBackground isOnlyBorders borderColor={COLORS.BLUE}>
      <View style={styles.wrapper}>
        <Categories categories={categories} />
        {!hasResults && (
          <>
            <LushFont style={styles.noResultsLabel}>
              {`No Results found!!! \n Please try searching again or see all the products below.`}
            </LushFont>
          </>
        )}
        <Shop
          products={products}
          clearSearch={() => setSearchWord(undefined)}
        />
      </View>
    </CheckedBackground>
  );
}

const styles = StyleSheet.create({
  noResultsLabel: {
    fontSize: 20,
    marginTop: 15,
    paddingHorizontal: PADDING_HORIZONTAL_PAGE,
    textAlign: "center",
  },
  wrapper: {
    flex: 1,
  },
});
