import Ionicons from "@expo/vector-icons/Ionicons";
import { useMemo } from "react";
import { Pressable } from "react-native";

import useProfile from "@/hooks/useProfile";
import { HapticFeedBack } from "@/utils/haptic-feedback";

interface Props {
  isFavourited?: boolean;
  id: string;
}

export default function FavouriteIcon({ id }: Props) {
  const { setFavourites, favourites, userName } = useProfile();
  const toggleIsFavourite = (id: string) => setFavourites(id);

  const isFavourited = useMemo(
    () => favourites[`${userName}`]?.includes(id) || false,
    [favourites, id, userName],
  );

  const onPress = () => {
    HapticFeedBack();
    toggleIsFavourite(id);
  };

  return (
    <Pressable onPress={onPress} android_ripple={{ color: "transparent" }}>
      <Ionicons
        name={isFavourited ? "heart-sharp" : "heart-outline"}
        color={isFavourited ? "red" : "black"}
        size={34}
      />
    </Pressable>
  );
}
