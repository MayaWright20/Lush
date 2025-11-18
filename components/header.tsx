import { router, usePathname } from "expo-router";
import { useMemo, useState } from "react";
import { StyleSheet, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { COLORS } from "@/constants/colors";
import { FONT_SIZE_HEADER, PADDING_HORIZONTAL_PAGE } from "@/constants/styles";
import useProducts from "@/hooks/useProducts";
import useProfile from "@/hooks/useProfile";

import AnimatedTextInput from "./animated-text-input";
import CheckedBackground from "./backgrounds/checked-background";
import LogoBtn from "./buttons/logo-btn";
import { LushFont } from "./lush-font";

export default function Header() {
  const { setFilteredProducts } = useProducts();
  const { userName } = useProfile();

  const onPress = () => {
    setFilteredProducts("");
    router.navigate("/(tabs)");
  };
  const [search, setSearch] = useState("");

  const onChangeText = (value: string) => {
    setSearch(value);
    setFilteredProducts(value);
  };

  const pathname = usePathname();

  const isSearchShown = useMemo(
    () => pathname === "/" || pathname.split("/")[1] === "/product/[id]",
    [pathname],
  );

  return (
    <View style={styles.headerContainer}>
      <CheckedBackground
        isOnlyBorders
        borderColor={COLORS.BLUE}
        inputHeight={400}
        color2="transparent"
      >
        <SafeAreaView style={styles.safeAreaView}>
          <LogoBtn fontSize={FONT_SIZE_HEADER} onPress={onPress} />
          {isSearchShown ? (
            <AnimatedTextInput
              containerStyle={styles.textInput}
              label={"Search"}
              onChangeText={(value) => onChangeText(value)}
              color={"black"}
              value={search}
              onBlur={() => setSearch("")}
            />
          ) : (
            <LushFont style={styles.title}>
              {pathname === "/favourites" ? "Favourites" : `Hey ${userName}!`}
            </LushFont>
          )}
        </SafeAreaView>
      </CheckedBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  headerContainer: {
    height: 140,
  },
  safeAreaView: {
    flexDirection: "row",
    paddingHorizontal: PADDING_HORIZONTAL_PAGE,
  },
  textInput: {
    flex: 1,
    marginLeft: 10,
  },
  title: {
    fontSize: 45,
    marginLeft: 30,
    textAlign: "center",
  },
});
