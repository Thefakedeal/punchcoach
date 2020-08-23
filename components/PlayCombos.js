import React, { useEffect, useState } from "react";
import { useCurrentTime, useTimerIsOn } from "../contexts/timerValues";

import { Audio } from "expo-av";

const comboAudios = [
  require("../assets/1.wav"),
  require("../assets/2.wav"),
  require("../assets/3.wav"),
  require("../assets/4.wav"),
  require("../assets/5.wav"),
  require("../assets/6.wav"),
];

function loadCombo(asset){
  return new Promise((resolve,reject)=>{
    const sound = new Audio.Sound()
    sound.loadAsync(asset)
      .then(()=>{
        resolve(sound.playAsync)
      })
      .catch(err=>{
        reject(err)
      })
  })
}

async function useCombo(maxFrequency) {

  let frequency = Math.floor(Math.random()*maxFrequency);

  const playRandomAudio = async () =>{
    const audio = new Audio.Sound();
    try{
      await audio.loadAsync(comboAudios[Math.floor(Math.random()*6)])
      await audio.playAsync()
    }
    catch(err){
      console.log(err)
    }
    if(frequency>=0){
      frequency--;
      setTimeout(playRandomAudio, 500);
    }
  }

  
  await playRandomAudio();

}

export default function PlayBell() {
  const [time] = useCurrentTime();
  const [timerIsOn] = useTimerIsOn();

  useEffect(() => {
    try {
      if (timerIsOn && time%2==0){
        useCombo(3)
      }
    } catch (err) {
      console.log(err);
    }
  }, [time]);

  return null;
}
