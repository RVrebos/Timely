import React from "react";
import { Animated, SafeAreaView, StyleSheet } from "react-native";
import { Header } from "../header/Header";
import { SearchBar } from "../commons/SearchBar";
import { RdvList } from "../lists/RdvList";
import { TButton } from "../commons/TButton";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation } from "@react-navigation/native";
import { RootStackParamList } from "../navigator/AppNavigator";
import View = Animated.View;

type NavigationProp = StackNavigationProp<RootStackParamList>
export const Home: React.FC = () => {
  const navigation = useNavigation<NavigationProp>();
  
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <Header />
        <SearchBar />
        <View style={styles.listContainer}>
          <RdvList />
        </View>
        <TButton onPress={() => navigation.navigate("RdvForm")} title={"Ajouter"} width={157} />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create(
  {
    text: {
      fontSize: 20,
      fontWeight: "bold",
      textAlign: "center",
      marginTop: 20,
      color: "#000"
    },
    container: {
      flex: 1,
      backgroundColor: "#FBFBFB"
    },
    listContainer: {
      flex: 1,
      marginBottom: 24
    }
  }
);
