import FontAwesome from "@expo/vector-icons/FontAwesome";
import { router } from "expo-router";
import { useVideoPlayer, VideoView } from "expo-video";
import { useEffect, useRef, useState } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";

import { COLORS } from "@/constants/colors";

const videoSource = require("../assets/videos/lush.mp4");

export default function Index() {
  const isReversed = useRef(false);

  const [counter, setCounter] = useState(0);

  const player = useVideoPlayer(videoSource, (player) => {
    player.loop = false;
    player.play();
  });

  useEffect(() => {
    const handleVideoEnd = () => {
      if (isReversed.current) {
        player.currentTime = 0;
        player.playbackRate = 1;
        isReversed.current = false;
      } else {
        player.currentTime = player.duration || 0;
        player.playbackRate = -1;
        isReversed.current = true;
      }
      player.play();
    };

    const subscription = player.addListener("playToEnd", handleVideoEnd);

    return () => subscription?.remove();
  }, [player]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setCounter((prev) => (prev === 3 ? 0 : prev + 1));
    }, 800);
    return () => clearTimeout(timer);
  }, [counter]);

  const navigateToAuth = () => {
    router.navigate("/auth");
  };

  return (
    <>
      <VideoView
        style={[styles.video]}
        player={player}
        contentFit="cover"
        nativeControls={false}
      />
      <View style={styles.overlay}>
        <Pressable onPress={navigateToAuth}>
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
        </Pressable>
      </View>
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
  },
});
