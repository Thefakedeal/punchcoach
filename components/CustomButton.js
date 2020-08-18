import React from "react";
import { TouchableOpacity, Text, View, StyleSheet } from "react-native";

export default function CustomButton({
  title="Button",
  onPress=()=>null,
  buttonStyle=styles.buttonStyle,
  textStyle=styles.buttonText,
}) {
  return (
    <TouchableOpacity onPress={onPress} style={buttonStyle}>
      <View style={{ flex: 1, alignItems:"center", justifyContent:"center" }}>
        <Text style={textStyle}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
}


const styles = StyleSheet.create({
  buttonStyle: {
    height: 50,
    backgroundColor: "#222222",
    borderRadius: 10,
  },
  buttonText: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#E5E5E5",
  },
});