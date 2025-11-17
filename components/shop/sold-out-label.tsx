import React from "react";
import { StyleSheet, Text } from "react-native";

import { PADDING_HORIZONTAL_BTN } from "@/constants/styles";

interface Props {
  isVisible?: boolean;
}

function SoldOutLabel({ isVisible }: Props) {
  return isVisible && <Text style={styles.label}>Sold out</Text>;
}

export default React.memo(SoldOutLabel);

const styles = StyleSheet.create({
  label: {
    alignSelf: "flex-end",
    backgroundColor: "black",
    borderColor: "white",
    borderRadius: 2,
    borderWidth: 1,
    color: "white",
    fontWeight: "bold",
    paddingHorizontal: PADDING_HORIZONTAL_BTN,
    position: "absolute",
    textAlign: "center",
    textTransform: "capitalize",
    top: "55%",
    zIndex: 1,
  },
});
