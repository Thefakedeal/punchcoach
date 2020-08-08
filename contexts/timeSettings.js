import React, { useState, useEffect, useContext } from 'react'
import AsyncStorage from '@react-native-community/async-storage'

const DEFAULTVALUES = {
    ROUNDS: 3,
    RESTTIME:30,
    WORKTIME: 180
}

const KEYS = {
    ROUNDS: 'rounds',
    RESTTIME: 'restTime',
    WORKTIME: 'workTime'
}

const roundsContext = React.createContext();
const restTimeContext = React.createContext();
const workTimeContext = React.createContext();

export function useRounds(){
    const [rounds, setRounds] = useContext(roundsContext);

   

    return [rounds,setRounds]
}

export function useRestTime(){
    const [restTime, setRestTime] = useContext(restTimeContext);

    return [restTime,setRestTime]
}

export function useWorkTime(){
    const [workTime, setWorkTime] = useContext(workTimeContext)
    

    return [workTime, setWorkTime]
}

export function TimeSettings({children}) {
    const [rounds, setRounds] = useState(DEFAULTVALUES.ROUNDS);
    const [restTime, setRestTime]= useState(DEFAULTVALUES.RESTTIME);
    const [workTime, setWorkTime]= useState(DEFAULTVALUES.WORKTIME);

    useEffect(()=>{
        AsyncStorage.getItem(KEYS.ROUNDS, (err, result)=>{
            if(result) setRounds(parseInt(result));
        })
        AsyncStorage.getItem(KEYS.WORKTIME, (err, result)=>{
            // console.log(result)
            if(result) setWorkTime(parseInt(result));
        })
        AsyncStorage.getItem(KEYS.RESTTIME, (err, result)=>{
            if(result) setRestTime(parseInt(result));
        })
    },[])

    useEffect(()=>{
        AsyncStorage.setItem(KEYS.WORKTIME, workTime.toString())
    },[workTime])

    useEffect(() => {
        AsyncStorage.setItem(KEYS.RESTTIME, restTime.toString())
    }, [restTime])

    useEffect(() => {
        AsyncStorage.setItem(KEYS.ROUNDS, rounds.toString())
    }, [rounds])

    return (
        <roundsContext.Provider value={[rounds,setRounds]} >
            <workTimeContext.Provider value={[workTime,setWorkTime]} >
                <restTimeContext.Provider value={[restTime,setRestTime]} >
                    {children}
                </restTimeContext.Provider>
            </workTimeContext.Provider>
        </roundsContext.Provider>
    )
}
