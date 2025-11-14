import { StyleSheet, Text, TouchableOpacity, ViewStyle } from "react-native";

interface Props {
  title: string;
  onPress: () => void;
  style: ViewStyle;
}

export default function CTA({ title, onPress, style }: Props) {
  return (
    <TouchableOpacity style={[styles.container, style]} onPress={onPress}>
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "black",
    borderRadius: 100,
    paddingHorizontal: 5,
    paddingVertical: 15,
  },
  title: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
  },
});
