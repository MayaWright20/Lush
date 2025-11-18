import React from "react";
import { StyleSheet, useWindowDimensions, View, ViewStyle } from "react-native";

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
  const { width, height } = useWindowDimensions();
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
    height: "100%",
    width: "100%",
  },
  container: {
    height: "100%",
    overflow: "hidden",
    position: "relative",
    width: "100%",
  },
  secondaryContainer: {
    position: "absolute",
  },
});
