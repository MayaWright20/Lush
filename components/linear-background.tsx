import { LinearGradient, LinearGradientProps } from "expo-linear-gradient";
import React from "react";
import { ColorValue, StyleSheet } from "react-native";

interface LinearBackgroundProps {
  colors: readonly [ColorValue, ColorValue, ...ColorValue[]];
  locations?: readonly [number, number, ...number[]] | null;
  start?: { x: number; y: number };
  end?: { x: number; y: number };
  children?: React.ReactNode;
  style?: LinearGradientProps["style"];
}

export default function LinearBackground({
  colors,
  locations,
  start = { x: 0, y: 0 },
  end = { x: 0, y: 1 },
  children,
  style,
}: LinearBackgroundProps) {
  return (
    <LinearGradient
      colors={colors}
      locations={locations}
      start={start}
      end={end}
      style={[styles.background, style]}
    >
      {children}
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
  },
});
