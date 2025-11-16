import { useLocalSearchParams } from "expo-router";
import { StyleSheet, Text, View } from "react-native";

export default function Product() {
  const { id: productId } = useLocalSearchParams<{ id: string }>();

  return (
    <View style={styles.container}>
      <Text>Product {productId}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    backgroundColor: "yellow",
    flex: 1,
    justifyContent: "center",
  },
});
