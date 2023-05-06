import React from "react";
import { StyleSheet, Text, TouchableWithoutFeedback, View } from "react-native";
import { ArrowLeft } from "phosphor-react-native";
import { RootStackParamList } from "../navigator/AppNavigator";
import { RouteProp, useNavigation, useRoute } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";

type routeProps = RouteProp<RootStackParamList, "RdvForm">
type NavigationProp = StackNavigationProp<RootStackParamList>
export const FormHeader: React.FC = () => {
  const route = useRoute<routeProps>();
  const navigation = useNavigation<NavigationProp>();
  const title = route.params?.rdv ? route.params.rdv.name : "Nouveau rendez-vous";
  
  return (
    <View style={styles.container}>
      <View style={styles.back}>
        <TouchableWithoutFeedback style={styles.backButton} onPress={() => navigation.goBack()}>
          <View>
            <ArrowLeft size={42} />
          </View>
        </TouchableWithoutFeedback>
      </View>
      <Text ellipsizeMode={"tail"} style={styles.title}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 40,
    flexDirection: "row",
    paddingHorizontal: 16,
    alignItems: "center"
  },
  back: {
    width: "25%"
  },
  title: {
    width: "50%",
    textAlign: "center",
    fontSize: 20,
    fontWeight: "bold",
    lineHeight: 20
  },
  backButton: {
    width: 42,
    height: 42
  }
});
