import { View, Text, Pressable, Image, FlatList } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { Tabs } from "expo-router";
import { useState } from "react";
import TabButton from "../../components/TabButton";

const TabsLayout = () => {
  const tabs = ["All", "Music", "Wrapped"];

  const [activeTab, setActiveTab] = useState("All");

  return (
    <Tabs>
      <Tabs.Screen
        name="index"
        options={{
          title: "",
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="home-filled" size={24} color="black" />
          ),
          headerLeft: () => (
            <View className="px-4 flex flex-row gap-4 items-center">
              <Pressable>
                <Image
                  source={{
                    uri: "https://lh3.googleusercontent.com/a/ACg8ocL_i9JC2KyFiuK3uD7R58-JIYUb_igdYVtV0MXHGKipQ7E=s360-c-no",
                  }}
                  className="h-8 w-8 rounded-full"
                />
              </Pressable>
              <FlatList
                data={tabs}
                renderItem={({ item }) => (
                  <TabButton
                    name={item}
                    activeTab={activeTab}
                    onHandlePress={() => setActiveTab(item)}
                  />
                )}
                horizontal
                showsHorizontalScrollIndicator={false}
                keyExtractor={(item) => item}
                contentContainerStyle={{ columnGap: 8 }}
              />
            </View>
          ),

          headerStyle: {
            backgroundColor: "#0F0F0F",
          },

          headerShadowVisible: false
        }}
      />
      <Tabs.Screen
        name="search/index"
        options={{
          title: "Search",
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="search" size={24} color="black" />
          ),
        }}
      />
      <Tabs.Screen
        name="library/index"
        options={{
          title: "Library",
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="my-library-music" size={24} color="black" />
          ),
        }}
      />
    </Tabs>
  );
};

export default TabsLayout;
