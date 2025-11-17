import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

import LinearBackground from "@/components/backgrounds/linear-background";

interface Props {
  category: string;
}

function CategoryCTA({ category }: Props) {
  return (
    <TouchableOpacity style={styles.container}>
      <LinearBackground style={styles.linearBackground}>
        <Text style={styles.title}>{category}</Text>
      </LinearBackground>
    </TouchableOpacity>
  );
}

export default React.memo(CategoryCTA);

const styles = StyleSheet.create({
  container: {
    borderRadius: 15,
    borderWidth: 1,
    flex: 1,
    marginHorizontal: 5,
    overflow: "hidden",
    width: 170,
  },
  linearBackground: {
    alignItems: "center",
    flex: 1,
    justifyContent: "center",
    width: "100%",
  },
  title: {
    fontWeight: "bold",
    padding: 20,
  },
});
