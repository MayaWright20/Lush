import LinearBackground from "@/components/backgrounds/linear-background";
import CTA from "@/components/cta";
import { PAGE_HORIZONTAL_PADDING } from "@/constants/styles";
import useProfile from "@/hooks/useProfile";
import { StyleSheet, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Profile() {
  const { logout } = useProfile();

  return (
    <LinearBackground
      style={styles.linearBackground}
      colors={["#ffffff", "#ffffff", "#ffffff", "#fae8f6"]}
    >
      <SafeAreaView style={styles.safeAreaView}>
        <Text style={styles.title}>My Profile</Text>
        <CTA style={styles.cta} title={"Logout"} onPress={logout} />
      </SafeAreaView>
    </LinearBackground>
  );
}

const styles = StyleSheet.create({
  cta: {
    width: "100%",
  },
  linearBackground: {
    padding: PAGE_HORIZONTAL_PADDING,
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
