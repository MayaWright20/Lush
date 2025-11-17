import React, { useCallback } from "react";
import { FlatList, ListRenderItem, StyleSheet, View } from "react-native";

import CategoryCTA from "./category-cta";

interface Props {
  categories?: string[];
}

export default function Categories({ categories }: Props) {
  const renderItem: ListRenderItem<string> = useCallback(
    ({ item, index }) => <CategoryCTA category={item} index={index} />,
    [],
  );

  const keyExtractor = useCallback((item: string) => item, []);

  return (
    <View style={styles.container}>
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
        contentContainerStyle={styles.flatlistContainer}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: "10%",
  },
  flatlistContainer: {
    justifyContent: "space-evenly",
  },
});
