import { router } from "expo-router";
import React, { useCallback, useMemo } from "react";
import { FlatList, ListRenderItem, useWindowDimensions } from "react-native";

import { Product } from "@/types";

import ProductItem from "./product-item";

interface Props {
  products?: Product[];
  clearSearch?: () => void;
}

export default function Shop({ products, clearSearch }: Props) {
  const { height } = useWindowDimensions();
  const data = products ?? [];

  const handleItemPress = useCallback(
    (item: Product) => {
      clearSearch?.();
      router.push({
        pathname: "/product/[id]",
        params: {
          id: item.slug,
          product: JSON.stringify(item),
        },
      });
    },
    [clearSearch],
  );

  const renderItem: ListRenderItem<Product> = useCallback(
    ({ item }) => <ProductItem item={item} onPress={handleItemPress} />,
    [handleItemPress],
  );

  const keyExtractor = useCallback(
    (item: Product, index: number) => item.id || `product-${index}`,
    [],
  );

  const numColumns = useMemo(() => (height < 500 ? 4 : 2), [height]);
  const ITEM_HEIGHT = useMemo(() => height / 3.5 + 30, [height]);

  const getItemLayout = useCallback(
    (_: ArrayLike<Product> | null | undefined, index: number) => {
      const row = Math.floor(index / numColumns);
      return {
        length: ITEM_HEIGHT,
        offset: ITEM_HEIGHT * row,
        index,
      };
    },
    [ITEM_HEIGHT, numColumns],
  );

  return (
    <FlatList
      key={`flatlist-${numColumns}`}
      numColumns={numColumns}
      data={data}
      renderItem={renderItem}
      keyExtractor={keyExtractor}
      getItemLayout={getItemLayout}
      removeClippedSubviews
      maxToRenderPerBatch={10}
      windowSize={10}
      initialNumToRender={6}
      updateCellsBatchingPeriod={50}
      showsVerticalScrollIndicator={false}
    />
  );
}
