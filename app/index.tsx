import { COLORS } from "@/constants/colors";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { useVideoPlayer, VideoView } from "expo-video";
import { useEffect, useRef, useState } from "react";
import { StyleSheet, Text, View } from "react-native";

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
    () => clearTimeout(timer);
  }, [counter]);

  return (
    <>
      <VideoView
        style={[styles.video]}
        player={player}
        contentFit="cover"
        nativeControls={false}
      />
      <View style={styles.overlay}>
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
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  video: {
    ...StyleSheet.absoluteFillObject,
  },
  overlay: {
    backgroundColor: COLORS.OVERLAY_DARK,
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  typographyCol: {
    color: "white",
  },
  title: {
    fontSize: 100,
    fontWeight: "900",
  },
  label: {
    textTransform: "capitalize",
    marginRight: 5,
  },
  icon: {
    marginLeft: 5,
  },
  enterWrapper: {
    alignSelf: "flex-end",
    flexDirection: "row",
    alignItems: "center",
  },
});
