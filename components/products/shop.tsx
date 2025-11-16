import { FlatList } from "react-native";

import { StoreState, useStore } from "@/store/store";

import ProductItem from "./shop-item";

export default function Shop() {
  const products = useStore((state: StoreState) => state.products);
  return (
    <FlatList
      numColumns={2}
      data={products || []}
      renderItem={({ item }) => <ProductItem item={item} />}
      keyExtractor={(item) => item.id?.toString() || ""}
    />
  );
}
