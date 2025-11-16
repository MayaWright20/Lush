import { FlatList, StyleSheet } from "react-native";

import { COLORS } from "@/constants/colors";
import { Product } from "@/types";

import CheckedBackground from "../backgrounds/checked-background";

import ProductItem from "./product-item";

interface Props {
  products: Product[];
}

export default function Shop({ products }: Props) {
  return (
    <>
      <CheckedBackground isOnlyBorders borderColor={COLORS.BLUE}>
        <FlatList
          numColumns={2}
          data={products || []}
          renderItem={({ item }) => <ProductItem item={item} />}
          keyExtractor={(item) => item.id?.toString() || ""}
          columnWrapperStyle={styles.container}
        />
      </CheckedBackground>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "space-around",
  },
});
