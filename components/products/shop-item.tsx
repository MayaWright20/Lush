import { router } from "expo-router";
import { Image, Pressable, Text } from "react-native";

export default function ProductItem({ item }: { item: any }) {
  return (
    <Pressable
      onPress={() => {
        router.navigate({
          pathname: "/[product]",
          params: { product: item.id },
        });
      }}
      key={item.id}
    >
      <Image
        src={item.thumbnail && item.thumbnail.url}
        width={50}
        height={50}
      />
      <Text>{item.name}</Text>
    </Pressable>
  );
}
