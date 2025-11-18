import { View } from "react-native";

import CheckedBackground from "@/components/backgrounds/checked-background";
import Categories from "@/components/shop/category/categories";
import Shop from "@/components/shop/shop";
import { COLORS } from "@/constants/colors";
import useProducts from "@/hooks/useProducts";

export default function Index() {
  const { products, categories, setSearchWord } = useProducts();

  return (
    <CheckedBackground isOnlyBorders borderColor={COLORS.BLUE}>
      <View style={{ flex: 1 }}>
        <Categories categories={categories} />
        <Shop
          products={products}
          clearSearch={() => setSearchWord(undefined)}
        />
      </View>
    </CheckedBackground>
  );
}
