import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

interface Props {
  category: string;
}

function CategoryCTA({ category }: Props) {
  return (
    <TouchableOpacity style={styles.container}>
      <Text style={styles.title}>{category}</Text>
    </TouchableOpacity>
  );
}

export default React.memo(CategoryCTA);

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
