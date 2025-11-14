import AnimatedTextInput from "@/components/animated-text-input";
import CheckedBackground from "@/components/backgrounds/checked-background";
import CTA from "@/components/cta";
import { COLORS } from "@/constants/colors";
import { PADDING_HORIZONTAL_PAGE } from "@/constants/styles";
import useProfile from "@/hooks/useProfile";
import { router } from "expo-router";
import { KeyboardAvoidingView, Platform, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function AuthScreen() {
  const { login } = useProfile();

  const navigateBack = () => {
    router.back();
  };

  return (
    <CheckedBackground color1={COLORS.BLUE} color2="transparent">
      <SafeAreaView style={styles.safeAreaView}>
        <CTA
          textStyle={styles.backCtaTitle}
          touchableOpacityStyle={styles.backCta}
          title={"Back"}
          onPress={navigateBack}
        />
        <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "padding" : "height"}
          style={styles.wrapper}
        >
          <AnimatedTextInput
            label={"Name"}
            color="black"
            onChangeText={() => console.log("hello")}
            containerStyle={styles.animatedTextInputContainer}
            placeholder="What is your name?"
          />
          <CTA
            touchableOpacityStyle={styles.loginBtn}
            title={"Login"}
            onPress={login}
          />
        </KeyboardAvoidingView>
      </SafeAreaView>
    </CheckedBackground>
  );
}

const styles = StyleSheet.create({
  animatedTextInputContainer: {
    marginBottom: 15,
    marginTop: -23,
  },
  backCta: {
    alignSelf: "baseline",
    backgroundColor: COLORS.BLUE,
    borderWidth: 1,
    color: "black",
  },
  backCtaTitle: {
    color: "black",
  },
  loginBtn: {
    alignSelf: "flex-end",
  },
  safeAreaView: {
    flex: 1,
    padding: PADDING_HORIZONTAL_PAGE,
  },
  wrapper: {
    flex: 1,
    justifyContent: "center",
  },
});
