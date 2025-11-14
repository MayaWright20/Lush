import React from "react";
import { Dimensions, StyleSheet, View } from "react-native";

const { width, height } = Dimensions.get("window");

interface Props {
  rows: number;
  columns: number;
  color1: string;
  color2: string;
}

export default function CheckedBackground({
  rows = 12,
  columns = 8,
  color1 = "#f2f2f2",
  color2 = "#e0e0e0",
}: Props) {
  const squareWidth = width / columns;
  const squareHeight = height / rows;

  const totalSquares = rows * columns;

  return (
    <View pointerEvents="none" style={StyleSheet.absoluteFill}>
      {Array.from({ length: totalSquares }).map((_, index) => {
        const row = Math.floor(index / columns);
        const col = index % columns;
        const isEven = (row + col) % 2 === 0;

        return (
          <View
            key={index}
            style={{
              position: "absolute",
              width: squareWidth,
              height: squareHeight,
              left: col * squareWidth,
              top: row * squareHeight,
              backgroundColor: isEven ? color1 : color2,
            }}
          />
        );
      })}
    </View>
  );
}
