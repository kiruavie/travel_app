import React, { Component } from "react";
import { Tabs } from "expo-router";
import {
  AntDesign,
  Ionicons,
  MaterialCommunityIcons,
} from "@expo/vector-icons";
import { View } from "react-native";

export default class Layout extends Component {
  render() {
    return (
      <Tabs
        screenOptions={{
          tabBarStyle: {
            backgroundColor: "black",
            borderTopWidth: 0,
            padding: 0,
          },
          tabBarShowLabel: false,
          tabBarActiveTintColor: "yellow",
        }}
      >
        <Tabs.Screen
          name="index"
          options={{
            tabBarIcon: ({ color }) => (
              <Ionicons name="compass" size={28} color={color} />
            ),
          }}
        ></Tabs.Screen>
        <Tabs.Screen
          name="category"
          options={{
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons
                name="view-dashboard-outline"
                size={24}
                color={color}
              />
            ),
          }}
        ></Tabs.Screen>
        <Tabs.Screen
          name="search"
          options={{
            tabBarIcon: ({ color }) => (
              <View
                style={{
                  backgroundColor: "orange",
                  paddingHorizontal: 16,
                  paddingVertical: 12,
                  borderRadius: 10,
                  height: 50,
                }}
              >
                <AntDesign name="search1" size={24} color={color} />
              </View>
            ),
          }}
        ></Tabs.Screen>
        <Tabs.Screen
          name="bookmarks"
          options={{
            tabBarIcon: ({ color }) => (
              <Ionicons name="bookmarks" size={24} color={color} />
            ),
          }}
        ></Tabs.Screen>

        <Tabs.Screen
          name="profile"
          options={{
            tabBarIcon: ({ color }) => (
              <AntDesign name="user" size={24} color={color} />
            ),
          }}
        ></Tabs.Screen>
      </Tabs>
    );
  }
}
