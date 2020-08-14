import React, { useState, useEffect, useContext } from "react";
import AsyncStorage from "@react-native-community/async-storage";

const DIFFICUILTY = {
  EASY: "Easy",
  MEDIUM: "Medium",
  HARD: "Hard",
  EXPERT: "Expert",
};

const SPEED = {
  TURTLE: "Turtle",
  SLOW: "Slow",
  NORMAL: "Normal",
  FAST: "Fast",
};
const KEYS = {
  COMBOLEVEL: "comboLevel",
  SPEED: "speed",
};

const DEFAULTVALUES = {
  defaultComboLevel: DIFFICUILTY.EASY,
  defaultSpeed: SPEED.NORMAL,
};

export const combosLevels = [
  {
    id: "1",
    name: DIFFICUILTY.EASY,
  },
  {
    id: "2",
    name: DIFFICUILTY.MEDIUM,
  },
  {
    id: "3",
    name: DIFFICUILTY.HARD,
  },
  {
    id: "4",
    name: DIFFICUILTY.EXPERT,
  },
];

export const speedLevels = [
  {
    id: "1",
    name: SPEED.TURTLE,
  },
  {
    id: "2",
    name: SPEED.SLOW,
  },
  {
    id: "3",
    name: SPEED.NORMAL,
  },
  {
    id: "4",
    name: SPEED.FAST,
  },
];

const combosLevelContext = React.createContext();
const speedContext = React.createContext();

export function useComboLevel() {
  const [comboLevel, setComboLevel] = useContext(combosLevelContext);

  return [comboLevel, setComboLevel];
}

export function useSpeed() {
  const [speed, setSpeed] = useContext(speedContext);
  return [speed, setSpeed];
}

export function DifficuiltySettings({ children }) {
  const [comboLevel, setComboLevel] = useState(DEFAULTVALUES.defaultComboLevel);
  const [speed, setSpeed] = useState(DEFAULTVALUES.defaultSpeed);

  useEffect(() => {
    AsyncStorage.getItem(KEYS.COMBOLEVEL, (err, result) => {
      if (result) setComboLevel(result);
    });
    AsyncStorage.getItem(KEYS.SPEED, (err, result) => {
      if (result) setSpeed(result);
    });
  }, []);

  useEffect(() => {
    AsyncStorage.setItem(KEYS.COMBOLEVEL, comboLevel);
  }, [comboLevel]);

  useEffect(() => {
    AsyncStorage.setItem(KEYS.SPEED, speed);
  }, [speed]);

  return (
    <speedContext.Provider value={[speed, setSpeed]}>
      <combosLevelContext.Provider value={[comboLevel, setComboLevel]}>
        {children}
      </combosLevelContext.Provider>
    </speedContext.Provider>
  );
}
