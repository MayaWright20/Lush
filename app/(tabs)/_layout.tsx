import Ionicons from "@expo/vector-icons/Ionicons";
import { Tabs } from "expo-router";
import { useEffect } from "react";

import { StoreState, useStore } from "@/store/store";
import { Product } from "@/types";

import { data } from "../../data/task_mock_data.json";

export default function Layout() {
  const setProducts = useStore((state: StoreState) => state.setProducts);

  useEffect(() => {
    if (!data) return;
    setProducts(data as Product[]);
  }, [setProducts]);
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: "black",
        headerShown: false,
        // tabBarBackground: () => (
        //   <CheckedBackground isOnlyBorders borderColor={COLORS.BLUE} />
        // ),
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "shop",
          tabBarIcon: ({ color, focused }) => (
            <Ionicons
              name={focused ? "home-sharp" : "home-outline"}
              color={"black"}
              size={24}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="favourites/index"
        options={{
          title: "favourites",
          tabBarIcon: ({ color, focused }) => (
            <Ionicons
              name={focused ? "heart-sharp" : "heart-outline"}
              color={"black"}
              size={24}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="profile/index"
        options={{
          title: "profile",
          tabBarIcon: ({ color, focused }) => (
            <Ionicons
              name={focused ? "person" : "person-outline"}
              size={24}
              color="black"
            />
          ),
        }}
      />
    </Tabs>
  );
}
