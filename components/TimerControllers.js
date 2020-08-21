import React, { useState, useEffect } from "react";


import {
  useCurrentTime,
  useCurrentWorkState,
  useCurrentRounds,
  useTimerIsOn,
} from "../contexts/timerValues";

import { useWorkTime, useRounds } from "../contexts/timeSettings";

import CustomButton from "./CustomButton";
import { View, StyleSheet } from "react-native";


export default function TimerControllers() {
  const [time, setTime] = useCurrentTime();
  const [timerInterval, setTimerInterval] = useState();
  const [timerIsOn, setTimerIsOn] = useTimerIsOn();
  const [workState, setWorkState] = useCurrentWorkState();
  const [currentRounds, setCurrentRounds] = useCurrentRounds();
  const [workTime] = useWorkTime();
  const [round] = useRounds();


  useEffect(() => {
    if (time <= 0 && currentRounds > 0) {
      setWorkState(work=>!work)
    }
  }, [time]);

  useEffect(() => {
    if (currentRounds <= 0) resetTimer();
  }, [currentRounds]);

  useEffect(() => {
    if (workState && timerIsOn) roundComplete();
  }, [workState]);

  function decrementTimer() {
    setTime((time) => (time > 0 ? time - 1 : time));
  }

  function roundComplete() {
    setCurrentRounds((rounds) => (rounds > 0 ? rounds - 1 : rounds));
  }

  function startTimer() {
    setTimerInterval(setInterval(decrementTimer, 1000));
    setTimerIsOn(true);
  }

  function stopTimer() {
    clearInterval(timerInterval);
    setTimerIsOn(false);
  }

  function resetRounds() {
    setCurrentRounds(round);
  }
  function resetClock() {
    setTime(workTime);
  }

  function resetTimer() {
    stopTimer();
    resetClock();
    setWorkState(true);
    resetRounds();
  }

  return (
    <View style={styles.container}>
      <CustomButton
        title={timerIsOn ? "Stop" : "Start"}
        buttonStyle={styles.buttonStyle}
        onPress={timerIsOn ? stopTimer : startTimer}
      />

      <CustomButton
        title={"Reset"}
        buttonStyle={styles.buttonStyle}
        onPress={resetTimer}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
  buttonStyle: {
    height: 50,
    width: 150,
    backgroundColor: "#222222",
    borderRadius: 10,
  },
  buttonText: {
    fontSize: 25,
    fontWeight: "bold",
    color: "#E5E5E5",
  },
});
