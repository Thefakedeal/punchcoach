import React, { useEffect, useState } from "react";
import { useCurrentWorkState, useTimerIsOn } from "../contexts/timerValues";
import {useSpeed,useComboLevel, speedLevels, combosLevels} from '../contexts/difficuiltySettings'

import { Audio } from "expo-av";

const comboAudios = [
  require("../assets/1.wav"),
  require("../assets/2.wav"),
  require("../assets/3.wav"),
  require("../assets/4.wav"),
  require("../assets/5.wav"),
  require("../assets/6.wav"),
  require("../assets/7.wav"),
  require("../assets/8.wav"),
  require("../assets/9.wav"),
  require("../assets/10.wav"),
];



async function useCombo(maxFrequency) {

  let frequency = Math.floor(Math.random()*maxFrequency);

  const playRandomAudio = async () =>{
    const audio = new Audio.Sound();
    try{
      await audio.loadAsync(comboAudios[Math.floor(Math.random()*10)])
      await audio.playAsync()
    }
    catch(err){
      console.log(err)
    }
    if(frequency>0){
      frequency--;
      setTimeout(playRandomAudio, 100);
    }
  }

  
  await playRandomAudio();

}

function getDuration(speedLevel){
  const level  = speedLevels.find((level)=> level.name==speedLevel);
  return parseInt(level.duration)*1000
}

function getNumberOfCombos(comboLevel){
  const level = combosLevels.find(level=> level.name==comboLevel)
  return parseInt(level.numOfCombos)
}

export default function PlayBell() {
  const [working] = useCurrentWorkState()
  const [timerIsOn] = useTimerIsOn();
  const [speed]= useSpeed();
  const [comboLevel]= useComboLevel()
  const [interv, setInterv]= useState();

  useEffect(() => {
    if(working &&  timerIsOn){
      const duration = getDuration(speed);
      const numOfCombos= getNumberOfCombos(comboLevel)
      setTimeout(()=>{useCombo(numOfCombos)},600)
      setInterv(setInterval(()=>{useCombo(numOfCombos)},duration))
    }

    return clearInterval(interv)
  }, [working,timerIsOn,speed,comboLevel]);

  return null;
}
