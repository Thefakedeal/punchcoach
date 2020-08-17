import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";

import CustomButton from "./CustomButton";

import { useCurrentRounds, useRoundsFunctions } from "../contexts/timerValues";

export default function Rounds() {
  const [currentRounds, setCurrentRounds] = useCurrentRounds();
  const { incrementRounds, decrementRounds } = useRoundsFunctions();

  return (
    <View style={styles.container}>
      <CustomButton
        title={"-"}
        buttonStyle={styles.buttonStyle}
        textStyle={styles.buttonText}
        onPress={decrementRounds}
      />
      <RoundsView rounds={currentRounds} />
      <CustomButton
        title={"+"}
        buttonStyle={styles.buttonStyle}
        textStyle={styles.buttonText}
        onPress={incrementRounds}
      />
    </View>
  );
}

function RoundsView({ rounds }) {
  return (
    <View style={styles.view}>
      <Text style={styles.text}> {rounds} </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    width: "100%",
    padding: 10,
  },
  view: {
    width: "50%",
    alignItems: "center",
    backgroundColor: "#E5E5E5",
  },
  text: {
    fontSize: 30,
    fontWeight: "bold",
  },
  buttonStyle: {
    height: 50,
    width: 50,
    backgroundColor: "#222222",
    borderRadius: 10,
  },
  buttonText: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#E5E5E5",
  },
});
