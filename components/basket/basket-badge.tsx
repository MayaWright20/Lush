import React from "react";
import { StyleSheet, Text, View } from "react-native";

import useProfile from "@/hooks/useProfile";

interface Props {
  showZero?: boolean;
  style?: any;
}

export default function BasketBadge({ showZero = false, style }: Props) {
  const { totalItems } = useProfile();

  if (!showZero && totalItems === 0) {
    return null;
  }

  return (
    <View style={[styles.badge, style]}>
      <Text style={styles.text}>{totalItems}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  badge: {
    backgroundColor: "red",
    borderRadius: 12,
    height: 24,
    justifyContent: "center",
    minWidth: 24,
    paddingHorizontal: 4,
  },
  text: {
    color: "white",
    fontSize: 12,
    fontWeight: "bold",
    textAlign: "center",
  },
});
