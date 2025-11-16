import { router } from "expo-router";
import { Image, Pressable, ScrollView, StyleSheet, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import LinearBackground from "@/components/backgrounds/linear-background";
import { LushFont } from "@/components/lush-font";
import { PADDING_HORIZONTAL_PAGE } from "@/constants/styles";
import { StoreState, useStore } from "@/store/store";

export default function Index() {
  const products = useStore((state: StoreState) => state.products);
  return (
    <>
      <LinearBackground style={styles.header}>
        <SafeAreaView>
          <LushFont style={styles.logo}>Lush</LushFont>
        </SafeAreaView>
      </LinearBackground>
      <ScrollView>
        {products &&
          products.map((item: any) => (
            <Pressable
              onPress={() => {
                console.log("item", item);
                router.navigate({
                  pathname: "/[product]",
                  params: { product: item.id },
                });
              }}
              key={item.id}
            >
              <Image src={item.thumbnail.url} width={50} height={50} />
              <Text>{item.name}</Text>
            </Pressable>
          ))}
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  header: {
    padding: PADDING_HORIZONTAL_PAGE,
    width: "100%",
  },
  logo: {
    fontSize: 32,
  },
});
