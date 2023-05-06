import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";

export const Header: React.FC = () => {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.title}>Timely</Text>
      </View>
      <View>
        <Image resizeMethod={'resize'} style={styles.image} source={require("../assets/logo.png")} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 70,
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 24
  },
  title: {
    fontSize: 36,
    lineHeight: 60,
  },
  image: {
    height: 60,
    width: 50
  }
});
