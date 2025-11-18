import { useVideoPlayer, VideoView } from "expo-video";
import { useEffect, useRef } from "react";
import { ViewStyle } from "react-native";

interface Props {
  videoSource: number;
  style?: ViewStyle;
}

export default function InfinateVideo({ videoSource, style }: Props) {
  const isReversed = useRef(false);

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

  return (
    <VideoView
      style={style}
      player={player}
      contentFit="cover"
      nativeControls={false}
    />
  );
}
