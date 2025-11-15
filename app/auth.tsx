import AnimatedTextInput from "@/components/animated-text-input";
import CheckedBackground from "@/components/backgrounds/checked-background";
import CTA from "@/components/cta";
import { COLORS } from "@/constants/colors";
import { NAME_VALIDATOR } from "@/constants/regex";
import { PADDING_HORIZONTAL_PAGE } from "@/constants/styles";
import useProfile from "@/hooks/useProfile";
import { isRegexValid, regexErrorMessage } from "@/utils/regex-validators";
import { router } from "expo-router";
import { useState } from "react";
import { KeyboardAvoidingView, Platform, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function AuthScreen() {
  const { login, setUserName, userName } = useProfile();
  const [showErrorMessage, setShowErrorMessage] = useState(false);

  const navigateBack = () => {
    router.back();
  };

  const authenticationHandler = () => {
    if (!userName) return;
    if (isRegexValid(NAME_VALIDATOR, userName)) {
      login();
    } else {
      setShowErrorMessage(true);
    }
  };

  const onChangeText = (value: string) => {
    setShowErrorMessage(false);
    setUserName(value);
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
            onChangeText={(value) => onChangeText(value)}
            containerStyle={styles.animatedTextInputContainer}
            placeholder="What is your name?"
            showErrorMessage={showErrorMessage}
            errorMessage={regexErrorMessage(NAME_VALIDATOR)}
          />
          <CTA
            touchableOpacityStyle={styles.loginBtn}
            title={"Login"}
            onPress={() => authenticationHandler()}
            isDisabled={userName?.trim() === "" || userName === undefined}
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
    color: "white",
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
