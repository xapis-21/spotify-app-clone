import { View, Text, Pressable } from "react-native";
import React from "react";

type TabButtonProps = {
  name: string;
  activeTab: string;
  onHandlePress: () => void;
};

export default function TabButton({
  name,
  activeTab,
  onHandlePress,
}: TabButtonProps) {
  return (
    <Pressable onPress={onHandlePress}>
      <Text
        className={`${
          activeTab === name
            ? "bg-app-green text-black"
            : "bg-gray-500/20 text-white"
        } rounded-full py-2 px-4`}
      >
        {name}
      </Text>
    </Pressable>
  );
}
