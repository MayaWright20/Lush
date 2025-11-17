import { StyleSheet, Text } from "react-native";

import { PADDING_HORIZONTAL_BTN } from "@/constants/styles";

interface Props {
  isVisible?: boolean;
}

export default function SoldOutLabel({ isVisible }: Props) {
  return isVisible && <Text style={styles.label}>Sold out</Text>;
}

const styles = StyleSheet.create({
  label: {
    alignSelf: "flex-end",
    backgroundColor: "black",
    borderRadius: 2,
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
