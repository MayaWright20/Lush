import { StyleSheet, Text, TouchableOpacity } from "react-native";

interface Props {
  category: string;
}

export default function CategoryCTA({ category }: Props) {
  return (
    <TouchableOpacity style={styles.container}>
      <Text style={styles.title}>{category}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    justifyContent: "center",
    margin: 15,
  },
  title: {
    padding: 10,
  },
});
