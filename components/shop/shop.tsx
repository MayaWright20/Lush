import React, { useCallback } from "react";
import { FlatList, ListRenderItem } from "react-native";

import { height } from "@/constants/dimensions";
import { Product } from "@/types";

import ProductItem from "./product-item";

interface Props {
  products?: Product[];
}

export default function Shop({ products }: Props) {
  const renderItem: ListRenderItem<Product> = useCallback(
    ({ item }) => <ProductItem item={item} />,
    [],
  );

  const keyExtractor = useCallback(
    (item: Product, index: number) => item.id || `product-${index}`,
    [],
  );

  const ITEM_HEIGHT = height / 3.5 + 10;

  const getItemLayout = useCallback(
    (data: ArrayLike<Product> | null | undefined, index: number) => ({
      length: ITEM_HEIGHT,
      offset: ITEM_HEIGHT * Math.floor(index / 2),
      index,
    }),
    [ITEM_HEIGHT],
  );

  return (
    <FlatList
      numColumns={2}
      data={products || []}
      renderItem={renderItem}
      keyExtractor={keyExtractor}
      getItemLayout={getItemLayout}
      removeClippedSubviews={true}
      maxToRenderPerBatch={10}
      windowSize={10}
      initialNumToRender={6}
      updateCellsBatchingPeriod={50}
    />
  );
}
