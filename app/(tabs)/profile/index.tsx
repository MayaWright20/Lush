import { StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import CheckedBackground from "@/components/backgrounds/checked-background";
import CTA from "@/components/cta";
import { COLORS } from "@/constants/colors";
import { PADDING_HORIZONTAL_PAGE } from "@/constants/styles";
import useProfile from "@/hooks/useProfile";

export default function Profile() {
  const { logout } = useProfile();

  return (
    <CheckedBackground isOnlyBorders borderColor={COLORS.BLUE}>
      <SafeAreaView style={styles.safeAreaView}>
        <CTA title={"Logout"} onPress={logout} />
      </SafeAreaView>
    </CheckedBackground>
  );
}

const styles = StyleSheet.create({
  safeAreaView: {
    flex: 1,
    justifyContent: "center",
    padding: PADDING_HORIZONTAL_PAGE,
  },
});
