import { LinearGradient, LinearGradientProps } from "expo-linear-gradient";
import React from "react";
import { ColorValue } from "react-native";

import { COLORS } from "@/constants/colors";

interface LinearBackgroundProps {
  colors?: readonly [ColorValue, ColorValue, ...ColorValue[]];
  locations?: readonly [number, number, ...number[]] | null;
  start?: { x: number; y: number };
  end?: { x: number; y: number };
  children?: React.ReactNode;
  style?: LinearGradientProps["style"];
  isFullScreen?: boolean;
}

export default function LinearBackground({
  colors = ["white", COLORS.PINK],
  locations,
  start = { x: 0, y: 0 },
  end = { x: 0, y: 1 },
  children,
  style,
  isFullScreen,
}: LinearBackgroundProps) {
  return (
    <LinearGradient
      colors={colors}
      locations={locations}
      start={start}
      end={end}
      style={[
        style,
        {
          position: isFullScreen ? "relative" : "absolute",
          flex: isFullScreen ? 1 : undefined,
        },
      ]}
    >
      {children}
    </LinearGradient>
  );
}
