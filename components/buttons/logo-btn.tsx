import { Pressable } from "react-native";

import { HapticFeedBack } from "@/utils/haptic-feedback";

import { LushFont } from "../lush-font";

interface Props {
  onPress: () => void;
  fontSize: number;
}

export default function LogoBtn({ onPress, fontSize }: Props) {
  const onPressHandler = () => {
    HapticFeedBack();
    onPress();
  };

  return (
    <Pressable onPress={onPressHandler}>
      <LushFont style={{ fontSize }}>Lush</LushFont>
    </Pressable>
  );
}
