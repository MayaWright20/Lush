import { StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import CheckedBackground from "@/components/backgrounds/checked-background";
import Shop from "@/components/shop/shop";
import { COLORS } from "@/constants/colors";
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
