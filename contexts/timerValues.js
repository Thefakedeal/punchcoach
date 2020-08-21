import React, { useState, useEffect, useContext } from "react";

import {
  useWorkTime,
  useRestTime,
  useRounds,
  DEFAULTVALUES,
} from "./timeSettings";

const currentTimeContext = React.createContext();
const currentRoundsContext = React.createContext();
const currentWorkStateContext = React.createContext();
const timerIsOnContext= React.createContext();

export const WORKSTATE = {
  WORK: true,
  REST: false,
};


export function useCurrentTime() {
  const [currentTime, setCurrentTime] = useContext(currentTimeContext);
  return [currentTime, setCurrentTime];
}

export function useCurrentRounds() {
  const [currentRound, setCurrentRound] = useContext(currentRoundsContext);
  return [currentRound, setCurrentRound];
}

export function useCurrentWorkState() {
  const [currentWorkState, setCurrentWorkState] = useContext(
    currentWorkStateContext
  );

  return [currentWorkState, setCurrentWorkState];
}

export function useTimerIsOn(){
  const [timerIsOn, setTimerIsOn] = useContext(timerIsOnContext);
  return [timerIsOn,setTimerIsOn];
}

export function TimerValues({ children }) {
  const [workTime] = useWorkTime();
  const [restTime] = useRestTime();
  const [rounds] = useRounds();

  const [currentTime, setCurrentTime] = useState(workTime);
  const [currentRound, setCurrentRound] = useState(rounds);
  const [currentWorkState, setCurrentWorkState] = useState(WORKSTATE.WORK);
  const [timerIsOn, setTimerIsOn] = useState(false);

  useEffect(() => {
    setCurrentTime(workTime);
    setCurrentWorkState(WORKSTATE.WORK);
  }, [workTime]);

  useEffect(() => {
    setCurrentTime(currentWorkState === WORKSTATE.WORK ? workTime : restTime);
  }, [currentWorkState]);

  useEffect(() => {
    setCurrentRound(rounds);
  }, [rounds]);

  return (
    <timerIsOnContext.Provider value= {[timerIsOn, setTimerIsOn]} >
    <currentTimeContext.Provider value={[currentTime, setCurrentTime]}>
      <currentRoundsContext.Provider value={[currentRound, setCurrentRound]}>
        <currentWorkStateContext.Provider
          value={[currentWorkState, setCurrentWorkState]}
        >
          {children}
        </currentWorkStateContext.Provider>
      </currentRoundsContext.Provider>
    </currentTimeContext.Provider>
    </timerIsOnContext.Provider>
  );
}
