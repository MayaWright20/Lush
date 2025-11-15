import { COLORS } from "@/constants/colors";
import { height, width } from "@/constants/dimensions";
import React from "react";
import { StyleSheet, View } from "react-native";

interface Props {
  squareSize?: number;
  color1?: string;
  color2?: string;
  children?: React.ReactNode;
}

export default function CheckedBackground({
  squareSize = 25,
  color1 = COLORS.GREY_LIGHT,
  color2 = COLORS.GREY,
  children,
}: Props) {
  const columns = Math.ceil(width / squareSize);
  const rows = Math.ceil(height / squareSize);
  const squareWidth = squareSize;
  const squareHeight = squareSize;
  const totalSquares = rows * columns;

  return (
    <View style={StyleSheet.absoluteFill}>
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
      {children}
    </View>
  );
}
