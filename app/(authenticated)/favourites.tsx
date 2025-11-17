import { StyleSheet } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

import CheckedBackground from "@/components/backgrounds/checked-background";
import { LushFont } from "@/components/lush-font";
import Shop from "@/components/shop/shop";
import { COLORS } from "@/constants/colors";
import { PADDING_HORIZONTAL_PAGE } from "@/constants/styles";
import useProducts from "@/hooks/useProducts";
import { PersistStoreState, usePersistStore } from "@/store/store";

export default function Favourites() {
  const { products } = useProducts();
  const favourites = usePersistStore(
    (state: PersistStoreState) => state.favourites,
  );
  const userName = usePersistStore(
    (state: PersistStoreState) => state.userName,
  );

  return (
    <CheckedBackground isOnlyBorders borderColor={COLORS.BLUE}>
      <SafeAreaProvider>
        <SafeAreaView style={{ flex: 1, padding: PADDING_HORIZONTAL_PAGE }}>
          <LushFont style={styles.title}>Favourites</LushFont>
          <Shop
            products={products?.filter((product) =>
              favourites[userName!]?.includes(product.id),
            )}
          />
        </SafeAreaView>
      </SafeAreaProvider>
    </CheckedBackground>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 40,
  },
});
