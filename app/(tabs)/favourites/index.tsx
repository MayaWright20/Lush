import { usePathname } from "expo-router";
import { useEffect } from "react";
import { StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import CheckedBackground from "@/components/backgrounds/checked-background";
import Shop from "@/components/shop/shop";
import { COLORS } from "@/constants/colors";
import useProducts from "@/hooks/useProducts";
import useProfile from "@/hooks/useProfile";

export default function Favourites() {
  const { products, setFilteredProducts, setSearchWord, favourites } =
    useProducts();

  const { userName } = useProfile();

  const pathname = usePathname();

  useEffect(() => {
    setSearchWord(undefined);
    setFilteredProducts("");
  }, [pathname, setSearchWord, setFilteredProducts]);

  return (
    <CheckedBackground isOnlyBorders borderColor={COLORS.BLUE}>
      <SafeAreaView style={styles.safeAreaView}>
        <Shop
          products={products?.filter((product) =>
            favourites[userName!]?.includes(product.id),
          )}
        />
      </SafeAreaView>
    </CheckedBackground>
  );
}

const styles = StyleSheet.create({
  safeAreaView: {
    flex: 1,
  },
});
