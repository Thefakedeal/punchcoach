import React from 'react'
import { View, StyleSheet,Dimensions,Text } from 'react-native'

import {useCurrentTime} from '../contexts/timerValues'

import { showTimeInMinutesAndSecondsString} from '../timeDisplayFunctions';

export default function Clock() {
    const [currentTime] = useCurrentTime()
  return (
    <View style={styles.container}>
      <View style={styles.clock}>
        <Text style={styles.text}>
          {showTimeInMinutesAndSecondsString(currentTime)}
        </Text>
      </View>
    </View>
  );
}



const styles= StyleSheet.create({
    container: {
        display: "flex",
        width: "100%",
        alignItems: "center"
    },
    clock:{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: Dimensions.get("window").width * 0.8,
        width: Dimensions.get("window").width * 0.8,
        borderRadius: Dimensions.get("window").width * 0.8,
        backgroundColor: '#B72626',
        borderColor: '#E5E5E5',
        borderWidth: 20
    },
    text: {
        fontSize: 80,
        fontWeight: "bold",
        color: '#E5E5E5'
    }
})
