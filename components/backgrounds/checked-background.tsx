import React from "react";
import { StyleSheet, View, ViewStyle } from "react-native";

import { height, width } from "@/constants/dimensions";

interface Props {
  squareSize?: number;
  color1?: string;
  color2?: string;
  children?: React.ReactNode;
  style?: ViewStyle;
  isFullScreen?: boolean;
  inputHeight?: number;
  isOnlyBorders?: boolean;
  borderColor?: string;
}

export default function CheckedBackground({
  squareSize = 25,
  color1 = "white",
  color2 = "white",
  children,
  style,
  isFullScreen,
  inputHeight,
  isOnlyBorders,
  borderColor,
}: Props) {
  const columns = Math.ceil(width / squareSize);
  const rows = Math.ceil(
    (!isFullScreen && inputHeight ? inputHeight : height) / squareSize,
  );
  const squareWidth = squareSize;
  const squareHeight = squareSize;
  const totalSquares = rows * columns;

  return (
    <View style={[styles.container, style]}>
      {Array.from({ length: totalSquares }).map((_, index) => {
        const row = Math.floor(index / columns);
        const col = index % columns;
        const isEven = (row + col) % 2 === 0;

        return (
          <View
            key={index}
            style={[
              {
                width: squareWidth,
                height: squareHeight,
                left: col * squareWidth,
                top: row * squareHeight,
                borderWidth: isOnlyBorders ? 2 : 0,
                borderColor: borderColor,
                backgroundColor: isEven && !isOnlyBorders ? color1 : color2,
              },
              styles.secondaryContainer,
            ]}
          />
        );
      })}
      <View style={styles.childrenWrapper}>{children}</View>
    </View>
  );
}

const styles = StyleSheet.create({
  childrenWrapper: {
    flex: 1,
  },
  container: {
    flex: 1,
    overflow: "hidden",
    position: "relative",
  },
  secondaryContainer: {
    position: "absolute",
  },
});
