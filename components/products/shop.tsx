import { FlatList, StyleSheet } from "react-native";

import { Product } from "@/types";

import ProductItem from "./product-item";

interface Props {
  products: Product[];
}

export default function Shop({ products }: Props) {
  return (
    <FlatList
      numColumns={2}
      data={products || []}
      renderItem={({ item }) => <ProductItem item={item} />}
      keyExtractor={(item) => item.id?.toString() || ""}
      columnWrapperStyle={styles.container}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "space-around",
  },
});
