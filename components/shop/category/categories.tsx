import React, { useCallback } from "react";
import { FlatList, ListRenderItem } from "react-native";

import CategoryCTA from "./category-cta";

interface Props {
  categories?: string[];
}

export default function Categories({ categories }: Props) {
  const renderItem: ListRenderItem<string> = useCallback(
    ({ item }) => <CategoryCTA category={item} />,
    [],
  );

  const keyExtractor = useCallback((item: string) => item, []);

  return (
    <FlatList
      data={categories}
      renderItem={renderItem}
      keyExtractor={keyExtractor}
      horizontal
      showsHorizontalScrollIndicator={false}
      removeClippedSubviews={true}
      maxToRenderPerBatch={5}
      windowSize={5}
      initialNumToRender={3}
    />
  );
}
