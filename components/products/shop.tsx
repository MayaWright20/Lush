import { FlatList } from "react-native";

import ProductItem from "./shop-item";

export default function Shop({ products }: { products: any }) {
  return (
    <FlatList
      numColumns={2}
      data={products || []}
      renderItem={({ item }) => <ProductItem item={item} />}
      keyExtractor={(item) => item.id?.toString() || ""}
    />
  );
}
