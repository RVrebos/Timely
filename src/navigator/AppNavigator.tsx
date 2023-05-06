import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { Home } from "../screen/Home";
import { RdvForm } from "../screen/RdvForm";
import { Rdv } from "../types/Rdv";

export type RootStackParamList = {
  Menu: undefined;
  RdvForm: { rdv: Rdv } | undefined
};

const RootStack = createStackNavigator<RootStackParamList>();

export const AppNavigator: React.FC = () => {
  return (
    <RootStack.Navigator initialRouteName="Menu" screenOptions={{ headerShown: false }}>
      <RootStack.Screen name="Menu" component={Home} />
      <RootStack.Screen name="RdvForm" component={RdvForm} />
    </RootStack.Navigator>
  );
};
