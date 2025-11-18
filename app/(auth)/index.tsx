import FontAwesome from "@expo/vector-icons/FontAwesome";
import { router } from "expo-router";
import { useEffect, useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

import InfinateVideo from "@/components/infinate-video";
import { COLORS } from "@/constants/colors";

const videoSource = require("../../assets/videos/lush.mp4");

export default function Index() {
  const [counter, setCounter] = useState(0);

  const navigateToAuth = () => {
    router.navigate("/login");
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setCounter((prev) => (prev === 3 ? 0 : prev + 1));
    }, 800);
    return () => clearTimeout(timer);
  }, [counter]);

  return (
    <>
      <InfinateVideo videoSource={videoSource} style={styles.video} />
      <TouchableOpacity onPress={navigateToAuth} style={styles.overlay}>
        <View>
          <Text style={[styles.title, styles.typographyCol]}>LUSH</Text>
          <View style={styles.enterWrapper}>
            <Text style={[styles.label, styles.typographyCol]}>enter</Text>
            {Array.from({ length: 3 }, (_, index) => {
              let colors = ["#ffffff", "#ffffffbb", "#ffffff6b"];
              return (
                <FontAwesome
                  key={index}
                  name="angle-right"
                  size={14}
                  color={index < counter ? colors[index] : "transparent"}
                />
              );
            })}
          </View>
        </View>
      </TouchableOpacity>
    </>
  );
}

const styles = StyleSheet.create({
  enterWrapper: {
    alignItems: "center",
    alignSelf: "flex-end",
    flexDirection: "row",
  },
  icon: {
    marginLeft: 5,
  },
  label: {
    marginRight: 5,
    textTransform: "capitalize",
  },
  overlay: {
    alignItems: "center",
    backgroundColor: COLORS.OVERLAY_DARK,
    flex: 1,
    justifyContent: "center",
  },
  title: {
    fontSize: 100,
    fontWeight: "900",
  },
  typographyCol: {
    color: "white",
  },
  video: {
    ...StyleSheet.absoluteFillObject,
    height: "100%",
    width: "100%",
  },
});
