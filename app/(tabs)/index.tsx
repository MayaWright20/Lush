import { View } from "react-native";

import Categories from "@/components/shop/category/categories";
import Shop from "@/components/shop/shop";
import useProducts from "@/hooks/useProducts";

export default function Index() {
  const { products, categories } = useProducts();

  return (
    <View>
      {/* <CheckedBackground isOnlyBorders borderColor={COLORS.BLUE}> */}
      <Categories categories={categories} />
      <Shop products={products} />
      {/* </CheckedBackground> */}
    </View>
  );
}
