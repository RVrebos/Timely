import React from "react";
import { StyleSheet, TextInput, View } from "react-native";
import { colors } from "../utils/colors";
import { MagnifyingGlass } from "phosphor-react-native";

export const SearchBar: React.FC = () => {
  return (
    <View style={styles.container}>
      <View style={styles.raw}>
        <TextInput placeholderTextColor={colors.white} style={styles.textInput} placeholder={"Rechercher"} />
        <MagnifyingGlass size={24} color={colors.white} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.primary,
    height: 38,
    borderRadius: 18,
    marginHorizontal: 24,
    marginVertical: 12,
    justifyContent: "center",
  },
  textInput: {
    height: 40,
    margin: 12,
    flex: 1,
  },
  raw: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 12,
  }
});
