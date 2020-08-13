import React, { useState, useEffect } from 'react'
import Slider from '@react-native-community/slider';
import { View, Text, StyleSheet } from 'react-native';

import {useWorkTime, useRestTime, DEFAULTVALUES} from '../contexts/timeSettings';

import {showTimeInMinutesAndSecondsString} from '../timeDisplayFunctions';

export function WorkTimeSlider(){
    const [workTime, setWorkTime] = useWorkTime();

    const [currentValue, setCurrentValue] = useState(workTime);

    useEffect(()=>{
      setCurrentValue(workTime)
    },[workTime])

    const handleValueChange = (value) =>{
      setCurrentValue(value)
    }

    const handleSlidingComplete = (value) =>{
      setWorkTime(value)
    }

    return (
      <View style={styles.sliderComponent}>
        <View style= {styles.sliderTextComponent}>
          <Text style={styles.sliderText}> Round Time </Text>  
          <Text style={styles.sliderText}> {showTimeInMinutesAndSecondsString(currentValue)} </Text>
        </View>
        <Slider
          style={styles.slider}
          minimumValue={0}
          maximumValue={DEFAULTVALUES.MAXWORKTIME}
          step={30}
          value={workTime}
          onValueChange={handleValueChange}
          onSlidingComplete= {handleSlidingComplete}
          maximumTrackTintColor="#C4C4C4"
          thumbTintColor="#C4C4C4"
          minimumTrackTintColor="#04C3FF"
        />
      </View>
    );
}

export function RestTimeSlider(){
    const [restTime, setRestTime] = useRestTime();

    const [currentValue, setCurrentValue] = useState(restTime);

    useEffect(()=>{
      setCurrentValue(restTime)
    },[restTime])

    const handleValueChange = (value) =>{
      setCurrentValue(value)
    }

    const handleSlidingComplete = (value) =>{
      setRestTime(value)
    }

    return (
        <View style={styles.sliderComponent}>
          <View style= {styles.sliderTextComponent}>
            <Text style={styles.sliderText}> Rest Time </Text>  
            <Text style={styles.sliderText}> {showTimeInMinutesAndSecondsString(currentValue)} </Text>
          </View>
          <Slider
            style={styles.slider}
            minimumValue={0}
            maximumValue={DEFAULTVALUES.MAXRESTTIME}
            step={30}
            value={restTime}
            onValueChange={handleValueChange}
            onSlidingComplete= {handleSlidingComplete}
            maximumTrackTintColor="#C4C4C4"
            thumbTintColor="#C4C4C4"
            minimumTrackTintColor="#04C3FF"
          />
        </View>
      );
}

const styles = StyleSheet.create({
    sliderComponent:{
        marginTop: 5,
        marginBottom: 5,
        height: 50,
        width: "100%",
        justifyContent: "flex-start",
    },
    sliderTextComponent :{
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-between"
    },
    sliderText :{
        color: '#E5E5E5',
        fontSize: 20,
        fontWeight: "bold"
    }
})