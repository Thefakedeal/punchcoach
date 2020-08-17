import React from "react";
import { TouchableOpacity, Text, View } from "react-native";

export default function CustomButton({
  title,
  onPress,
  buttonStyle,
  textStyle,
}) {
  return (
    <TouchableOpacity onPress={onPress} style={buttonStyle}>
      <View style={{ flex: 1, width: "100%", height: "100%", alignItems:"center", justifyContent:"center" }}>
        <Text style={textStyle}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
}
