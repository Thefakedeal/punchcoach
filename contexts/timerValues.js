import React, { useState, useEffect, useContext } from "react";

import { useWorkTime, useRestTime, useRounds, DEFAULTVALUES } from "./timeSettings";

const currentTimeContext = React.createContext();
const currentRoundsContext = React.createContext();
const currentWorkStateContext = React.createContext();

const WORKSTATE = {
  WORK: "Work",
  REST: "Rest",
};


export function useCurrentTime() {
  const [currentTime, setCurrentTime] = useContext(currentTimeContext);
  return [currentTime, setCurrentTime];
}

export function useRoundsFunctions(){
  const [currentRound, setCurrentRound] = useContext(currentRoundsContext);

  const decrementRounds = ()=>{
    setCurrentRound(round => round <= 1? 1: round-1 )
  }
  const incrementRounds = ()=>{
    setCurrentRound(round => round >= DEFAULTVALUES.MAXROUNDS? DEFAULTVALUES.MAXROUNDS: round+1)
  }
  return {decrementRounds,incrementRounds}
}

export function useCurrentRounds() {
  const [currentRound, setCurrentRound] = useContext(currentRoundsContext);
  return [currentRound, setCurrentRound];
}

export function useCurrentWorkState(){
    const [currentWorkState,setCurrentWorkState]= useContext(currentWorkStateContext);
    const toggleWorkState = ()=>{
        setCurrentWorkState((currentState)=> currentState=== WORKSTATE.WORK? WORKSTATE.REST: WORKSTATE.WORK)
    }
    return [currentWorkState, toggleWorkState]
}

export function TimerValues({ children }) {
  const [workTime] = useWorkTime();
  const [restTime] = useRestTime();
  const [rounds] = useRounds();

  const [currentTime, setCurrentTime] = useState(workTime);
  const [currentRound, setCurrentRound] = useState(rounds);
  const [currentWorkState, setCurrentWorkState] = useState(WORKSTATE.WORK);

  useEffect(() => {
    setCurrentTime(workTime);
    setCurrentWorkState(WORKSTATE.WORK);
  }, [workTime]);
  
  useEffect(() => {
    setCurrentTime(currentWorkState===WORKSTATE.WORK?workTime:restTime);
    }
  , [currentWorkState]);

  useEffect(() => {
    setCurrentRound(rounds);
  }, [rounds]);


  return (
    <currentTimeContext.Provider value={[currentTime, setCurrentTime]}>
      <currentRoundsContext.Provider value={[currentRound, setCurrentRound]}>
        <currentWorkStateContext.Provider
          value={[currentWorkState, setCurrentWorkState]}>
          {children}
        </currentWorkStateContext.Provider>
      </currentRoundsContext.Provider>
    </currentTimeContext.Provider>
  );
}
