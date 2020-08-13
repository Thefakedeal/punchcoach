import React, { useState, useEffect, useContext } from 'react'
import AsyncStorage from '@react-native-community/async-storage'


const DIFFICUILTY = {
    EASY: 'Easy',
    MEDIUM: 'Medium',
    HARD: 'Hard',
    EXPERT: 'Expert'
}

const KEYS= {
    COMBOLEVEL: 'comboLevel'
}

export const combosLevels = [
    {
        id: '1',
        name: DIFFICUILTY.EASY
    },
    {
        id: '2',
        name: DIFFICUILTY.MEDIUM
    },
    {
        id: '3',
        name: DIFFICUILTY.HARD
    },
    {
        id: '4',
        name: DIFFICUILTY.EXPERT
    }
]

const DEFAULTVALUES= {
    defaultComboLevel: DIFFICUILTY.EASY
}

const combosLevelContext= React.createContext();


export function useComboLevel(){
    const [comboLevel,setComboLevel] = useContext(combosLevelContext)

    return [comboLevel,setComboLevel];
}

export function DifficuiltySettings({children}) {
    const [comboLevel, setComboLevel] = useState(DEFAULTVALUES.defaultComboLevel);

    useEffect(()=>{
        AsyncStorage.getItem(KEYS.COMBOLEVEL, (err, result)=>{
            if(result) setComboLevel(result);
        })
    },[])

    useEffect(()=>{
        AsyncStorage.setItem(KEYS.COMBOLEVEL, comboLevel)
    }, [comboLevel])
    
    return (
        <combosLevelContext.Provider value={[comboLevel,setComboLevel]}>
            {children}
        </combosLevelContext.Provider>

    )
}
