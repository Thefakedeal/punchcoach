import React from "react";
import { StyleSheet, Text, View, StatusBar } from "react-native";


import { TimeSettings } from "./contexts/timeSettings";
import { DifficuiltySettings } from "./contexts/difficuiltySettings";
import StackNavigation from "./StackNavigation";



export default function App() {
  return (
    <DifficuiltySettings>
      <TimeSettings>
        <View style={styles.container}>
          <StackNavigation />
        </View>
      </TimeSettings>
    </DifficuiltySettings>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#090909",
    marginTop: StatusBar.currentHeight,
    // alignItems: "center",
    // justifyContent: 'center',
  },
});
