import React from 'react'
import Slider from '@react-native-community/slider';
import { View, Text, StyleSheet } from 'react-native';

import {useWorkTime, useRestTime} from '../contexts/timeSettings';

import {showTimeInMinutesAndSecondsString} from '../timeDisplayFunctions';

export function WorkTimeSlider(){
    const [workTime, setWorkTime] = useWorkTime();

    return (
      <View style={styles.sliderComponent}>
        <View style= {styles.sliderTextComponent}>
          <Text style={styles.sliderText}> Round Time </Text>  
          <Text style={styles.sliderText}> {showTimeInMinutesAndSecondsString(workTime)} </Text>
        </View>
        <Slider
          style={styles.slider}
          minimumValue={0}
          maximumValue={900}
          step={30}
          value={workTime}
          onValueChange={(value) => {
            setWorkTime(value);
          }}
          maximumTrackTintColor="#C4C4C4"
          thumbTintColor="#C4C4C4"
          minimumTrackTintColor="#04C3FF"
        />
      </View>
    );
}

export function RestTimeSlider(){
    const [restTime, setRestTime] = useRestTime();

    return (
        <View style={styles.sliderComponent}>
          <View style= {styles.sliderTextComponent}>
            <Text style={styles.sliderText}> Rest Time </Text>  
            <Text style={styles.sliderText}> {showTimeInMinutesAndSecondsString(restTime)} </Text>
          </View>
          <Slider
            style={styles.slider}
            minimumValue={0}
            maximumValue={900}
            step={30}
            value={restTime}
            onValueChange={(value) => {
              setRestTime(value);
            }}
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