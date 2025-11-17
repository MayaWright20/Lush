import { Text, View } from "react-native";

import CheckedBackground from "@/components/backgrounds/checked-background";
import { COLORS } from "@/constants/colors";

export default function Favourites() {
  return (
    <CheckedBackground isOnlyBorders borderColor={COLORS.BLUE}>
      <View>
        <Text>Favourites</Text>
      </View>
    </CheckedBackground>
  );
}
