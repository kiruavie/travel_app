import React from "react";
import { Stack } from "expo-router";
import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useHeaderHeight } from "@react-navigation/elements";

const index = () => {
  const headerHeight = useHeaderHeight();
  return (
    <>
      <Stack.Screen
        options={{
          headerTransparent: true,
          headerTitle: "",
          headerLeft: () => (
            <TouchableOpacity onPress={() => {}} style={{ marginLeft: 20 }}>
              <Image
                source={{
                  uri: "https://xsgames.co/randomusers/avatar.php?g=male",
                }}
                style={{ width: 40, height: 40, borderRadius: 10 }}
              />
            </TouchableOpacity>
          ),

          headerRight: () => (
            <TouchableOpacity
              onPress={() => {}}
              style={{
                marginRight: 20,
                backgroundColor: "white",
                padding: 10,
                borderRadius: 10,
                shadowColor: "#171717",
                shadowOffset: { width: 2, height: 4 },
                shadowOpacity: 0.2,
                shadowRadius: 3,
              }}
            >
              <Ionicons name="notifications" size={24} color="black" />
            </TouchableOpacity>
          ),
        }}
      ></Stack.Screen>
      <View style={[styles.container, { paddingTop: headerHeight }]}>
        <Text style={styles.headingText}>Explore the beautiful world</Text>

        <View style={styles.serachSectionWrapper}>
          <View style={styles.searchBar}>
            <Ionicons
              name="search"
              size={28}
              color="black"
              style={{ marginRight: 5, color: "black" }}
            />
            <TextInput placeholder="Rechercher" />
          </View>
          <TouchableOpacity onPress={() => {}} style={styles.filterBtn}>
            <Ionicons name="options" size={28} color={"white"} />
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    backgroundColor: "white",
  },
  headingText: {
    fontSize: 28,
    fontWeight: "800",
    color: "black",
    marginTop: 10,
  },
  serachSectionWrapper: {
    flexDirection: "row",
    marginVertical: 20,
  },
  searchBar: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: "whitesmoke",
    padding: 16,
    borderRadius: 10,
  },
  filterBtn: {
    backgroundColor: "orange",
    padding: 12,
    borderRadius: 10,
    marginLeft: 10,
  },
});

export default index;
