import { FlatList } from "react-native";

import CategoryCTA from "@/components/category-cta";

interface Props {
  categories?: string[];
}

export default function Categories({ categories }: Props) {
  return (
    <FlatList
      data={categories}
      renderItem={({ item }) => <CategoryCTA category={item} />}
      keyExtractor={(item) => item}
      horizontal
      showsHorizontalScrollIndicator={false}
    />
  );
}
