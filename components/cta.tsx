import { COLORS } from "@/constants/colors";
import {
  PADDING_HORIZONTAL_BTN,
  PADDING_VERTICAL_BTN,
} from "@/constants/styles";
import {
  StyleSheet,
  Text,
  TextStyle,
  TouchableOpacity,
  ViewStyle,
} from "react-native";

interface Props {
  title: string;
  onPress: () => void;
  touchableOpacityStyle?: ViewStyle;
  textStyle?: TextStyle;
  isDisabled?: boolean;
}

export default function CTA({
  title,
  onPress,
  touchableOpacityStyle,
  textStyle,
  isDisabled,
}: Props) {
  return (
    <TouchableOpacity
      style={[
        styles.container,
        touchableOpacityStyle,
        { backgroundColor: isDisabled ? COLORS.GREY_LIGHT : "black" },
      ]}
      onPress={onPress}
      disabled={isDisabled}
    >
      <Text style={[styles.title, textStyle]}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "black",
    borderRadius: 100,
    paddingHorizontal: PADDING_HORIZONTAL_BTN,
    paddingVertical: PADDING_VERTICAL_BTN,
  },
  title: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
  },
});
