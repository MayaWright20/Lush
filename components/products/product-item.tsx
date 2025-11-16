import { router } from "expo-router";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

import { width } from "@/constants/dimensions";

export default function ProductItem({ item }: { item: any }) {
  return (
    <TouchableOpacity
      onPress={() => {
        router.navigate({
          pathname: "/[product]",
          params: { product: item.id },
        });
      }}
      key={item.id}
      style={styles.container}
    >
      <Image src={item.thumbnail && item.thumbnail.url} style={styles.image} />
      <View style={styles.wrapper}>
        <Text numberOfLines={2} style={styles.title}>
          {item.name}
        </Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    height: width / 2,
    margin: 5,
    width: width / 2.2,
  },
  description: {
    color: "yellow",
  },
  image: {
    aspectRatio: 1,
    marginTop: -15,
    width: "100%",
  },
  title: {
    textAlign: "center",
  },
  wrapper: {
    backgroundColor: "yellow",
    borderRadius: 15,
    borderWidth: 1,
    flexGrow: 1,
    height: "70%",
    marginTop: "-55%",
    padding: 10,
    paddingTop: "50%",
    position: "relative",
    top: "0%",
    width: "100%",
    zIndex: -1,
  },
});
