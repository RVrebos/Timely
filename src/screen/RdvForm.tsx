import React from "react";
import { SafeAreaView, StyleSheet, View } from "react-native";
import { FormHeader } from "../header/FormHeader";
import { RouteProp, useRoute } from "@react-navigation/native";
import { RootStackParamList } from "../navigator/AppNavigator";
import { Form } from "../forms/Form";

type routeProps = RouteProp<RootStackParamList, "RdvForm">

export const RdvForm: React.FC = () => {
  const route = useRoute<routeProps>();
  
  return (
    <SafeAreaView style={styles.container}>
      <FormHeader />
      <View style={styles.contentContainer}>
        <Form />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  contentContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  }
});
