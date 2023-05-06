import React from "react";
import { StatusBar, useColorScheme } from "react-native";
import { NavigationContainer } from "@react-navigation/native";

import { Colors } from "react-native/Libraries/NewAppScreen";
import { AppNavigator } from "./src/navigator/AppNavigator";

function App(): JSX.Element {
  const isDarkMode = useColorScheme() === "dark";
  
  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter
  };
  
  return (
    <NavigationContainer>
      <>
        <StatusBar
          barStyle={isDarkMode ? "light-content" : "dark-content"}
          backgroundColor={backgroundStyle.backgroundColor}
        />
        <AppNavigator />
      </>
    </NavigationContainer>
  );
}

export default App;
