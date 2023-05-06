import React from "react";
import { Rdv } from "../types/Rdv";
import { StyleSheet, Text, TouchableWithoutFeedback, View } from "react-native";
import { colors } from "../utils/colors";
import { ArrowRight, UsersThree } from "phosphor-react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../navigator/AppNavigator";
import { useNavigation } from "@react-navigation/native";

interface IProps {
  rdv: Rdv;
}

type NavigationProp = StackNavigationProp<RootStackParamList>

export const RdvItemList: React.FC<IProps> = ({
  rdv
}) => {
  const navigation = useNavigation<NavigationProp>()
  
  return (
    <TouchableWithoutFeedback onPress={() => navigation.navigate('RdvForm', { rdv: rdv })} >
      <View style={styles.container}>
        <UsersThree weight={"fill"} size={24} />
        <View style={styles.textContainer}>
          <Text ellipsizeMode={"tail"} style={styles.name}>{rdv.name}</Text>
          <Text style={styles.date}>{rdv.date}</Text>
        </View>
        <ArrowRight color={colors.primary} weight={"fill"} size={24} />
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 50,
    alignItems: "center",
    backgroundColor: colors.white,
    marginHorizontal: 24,
    marginVertical: 12,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    flexDirection: "row",
    paddingHorizontal: 12,
    gap: 12
  },
  textContainer: {
    height: 50,
    flexDirection: "row",
    flex: 1,
    gap: 12,
    alignItems: "center"
  },
  name: {
    fontSize: 14,
    flex: 1
  },
  date: {
    fontSize: 14,
    width: 125
  }
});
