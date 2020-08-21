import React, {useEffect} from "react";
import {useTimerIsOn, useCurrentWorkState} from '../contexts/timerValues'
import { Audio } from "expo-av";

function playBell() {
  const SoundObject = new Audio.Sound();
  SoundObject.loadAsync(require("../assets/bell.wav"))
    .then(() => {
      SoundObject.playAsync();
    })
    .catch((err) => {
      console.log(err);
    });
}

export default function PlayBell() {
  const [timerIsOn] = useTimerIsOn();
  const [workState] = useCurrentWorkState();
  useEffect(() => {
    if (timerIsOn) {
      playBell();
    }
  }, [workState, timerIsOn]);

  return null;
}
