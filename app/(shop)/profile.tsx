import { StyleSheet, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import LinearBackground from "@/components/backgrounds/linear-background";
import CTA from "@/components/cta";
import { PADDING_HORIZONTAL_PAGE } from "@/constants/styles";
import useProfile from "@/hooks/useProfile";

export default function Profile() {
  const { logout, userName } = useProfile();

  return (
    <LinearBackground
      isFullScreen
      style={styles.linearBackground}
      colors={["#ffffff", "#ffffff", "#ffffff", "#fae8f6"]}
    >
      <SafeAreaView style={styles.safeAreaView}>
        <Text style={styles.title}>{`Hi ${userName}`}</Text>
        <CTA title={"Logout"} onPress={logout} />
      </SafeAreaView>
    </LinearBackground>
  );
}

const styles = StyleSheet.create({
  linearBackground: {
    padding: PADDING_HORIZONTAL_PAGE,
  },
  safeAreaView: {
    flex: 1,
  },
  title: {
    fontSize: 30,
    fontWeight: "600",
    marginBottom: "80%",
    textAlign: "center",
  },
});
