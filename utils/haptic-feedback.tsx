import * as Haptics from "expo-haptics";

export const HapticFeedBack = () => {
  Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Soft);
};
