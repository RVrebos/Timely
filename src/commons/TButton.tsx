import React from "react";
import { StyleSheet, Text, TouchableWithoutFeedback, View } from "react-native";
import { colors } from "../utils/colors";

interface IProps {
  title?: string;
  width?: number | string;
  color?: string;
  onPress?: () => void;
}

export const TButton: React.FC<IProps> = ({
  title = "Button",
  width = 100,
  color = colors.white,
  onPress = () => {
    console.log("Button pressed");
  }
}) =>
  (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={[styles.container, { width: width }]}>
        <Text style={{ color: color, fontSize: 16, fontWeight: "bold" }}>{title}</Text>
      </View>
    </TouchableWithoutFeedback>
  );

const styles = StyleSheet.create({
  container: {
    height: 50,
    backgroundColor: colors.primary,
    alignSelf: "center",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 18
  }
});
