import Entypo from "@expo/vector-icons/Entypo";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

import { COLORS } from "@/constants/colors";
import useProfile from "@/hooks/useProfile";
import { HapticFeedBack } from "@/utils/haptic-feedback";

interface Props {
  productId: string;
  isDisabled?: boolean;
  style?: any;
}

export default function BasketCounter({ productId, isDisabled, style }: Props) {
  const { setBasket, removeFromBasket, getProductQuantity } = useProfile();

  const quantity = getProductQuantity(productId);

  const handleIncrease = () => {
    if (isDisabled) return;
    HapticFeedBack();
    setBasket(productId, 1);
  };

  const handleDecrease = () => {
    if (isDisabled || quantity <= 0) return;
    HapticFeedBack();
    if (quantity === 0) {
      removeFromBasket(productId);
    } else {
      setBasket(productId, -1);
    }
  };

  const handleRemoveAll = () => {
    if (isDisabled) return;
    HapticFeedBack();
    removeFromBasket(productId);
  };

  return (
    <View style={[styles.container, style]}>
      <TouchableOpacity
        onPress={handleDecrease}
        disabled={isDisabled || quantity <= 0}
        style={[
          styles.button,
          (isDisabled || quantity <= 0) && styles.buttonDisabled,
        ]}
      >
        <Entypo
          name="circle-with-minus"
          size={24}
          color={isDisabled || quantity <= 0 ? COLORS.GREY : "white"}
        />
      </TouchableOpacity>

      <TouchableOpacity onPress={handleRemoveAll} style={styles.basketButton}>
        <FontAwesome
          name="shopping-basket"
          size={24}
          color={isDisabled ? COLORS.GREY : "white"}
        />
        {quantity >= 0 && (
          <View style={styles.quantityBadge}>
            <Text style={styles.quantityText}>{quantity}</Text>
          </View>
        )}
      </TouchableOpacity>

      <TouchableOpacity
        onPress={handleIncrease}
        disabled={isDisabled}
        style={[styles.button, isDisabled && styles.buttonDisabled]}
      >
        <Entypo
          name="circle-with-plus"
          size={24}
          color={isDisabled ? COLORS.GREY : "white"}
        />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  basketButton: {
    position: "relative",
  },
  button: {
    opacity: 1,
  },
  buttonDisabled: {
    opacity: 0.5,
  },
  container: {
    alignItems: "center",
    alignSelf: "center",
    backgroundColor: "rgba(0,0,0,0.7)",
    borderRadius: 25,
    flexDirection: "row",
    justifyContent: "space-evenly",
    marginVertical: 15,
    paddingHorizontal: 20,
    paddingVertical: 10,
    width: "60%",
  },
  quantityBadge: {
    backgroundColor: "red",
    borderRadius: 10,
    height: 20,
    justifyContent: "center",
    minWidth: 20,
    position: "absolute",
    right: -8,
    top: -8,
  },
  quantityText: {
    color: "white",
    fontSize: 12,
    fontWeight: "bold",
    textAlign: "center",
  },
});
