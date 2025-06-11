import { BottomTabBarProps } from '@react-navigation/bottom-tabs';
import { Tabs } from "expo-router";
import React from "react";
import TabBar from "../components/TabBar";

const _layout = () => {
  return (
    <Tabs
      tabBar={(props: BottomTabBarProps) => <TabBar {...props} />}
      screenOptions={{
        headerShown: false, // This hides the top header bar for all tabs
      }}
    >
      <Tabs.Screen
        name="Home"
        options={{
          title: "Home",
        }}
      />
      <Tabs.Screen
        name="Explore"
        options={{
          title: "Explore",
        }}
      />
    </Tabs>
  );
};

export default _layout;