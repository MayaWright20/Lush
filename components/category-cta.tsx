import { Text, TouchableOpacity } from "react-native";

interface Props {
  category: string;
}

export default function CategoryCTA({ category }: Props) {
  return (
    <TouchableOpacity>
      <Text>{category}</Text>
    </TouchableOpacity>
  );
}
