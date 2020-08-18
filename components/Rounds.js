import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";

import CustomButton from "./CustomButton";

import {DEFAULTVALUES} from '../contexts/timeSettings'
import { useCurrentRounds} from "../contexts/timerValues";

export default function Rounds() {
  const [currentRounds, setCurrentRounds] = useCurrentRounds();

  const incrementRounds = () =>{
    setCurrentRounds(rounds=>rounds<DEFAULTVALUES.MAXROUNDS?rounds+1:rounds);
  }

  const decrementRounds = () =>{
    setCurrentRounds(rounds=>rounds>1?rounds-1:rounds);
  }

  function RoundsView() {
    return (
      <View style={styles.view}>
        <Text style={styles.text}> {currentRounds} </Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <CustomButton
        title={"-"}
        buttonStyle={styles.buttonStyle}
        textStyle={styles.buttonText}
        onPress={decrementRounds}
      />
      <RoundsView/>
      <CustomButton
        title={"+"}
        buttonStyle={styles.buttonStyle}
        textStyle={styles.buttonText}
        onPress={incrementRounds}
      />
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
