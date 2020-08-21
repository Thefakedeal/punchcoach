import React from "react";

import { TimerValues } from "../contexts/timerValues";

import FullScreen from "../components/FullScreen";
import NavBar from "../components/NavBar";
import Clock from "../components/Clock";
import Rounds from "../components/Rounds";
import TimerControllers from "../components/TimerControllers";
import PlayBell from "../components/PlayBell"
import PlayCombos from '../components/PlayCombos'
import { View, StyleSheet } from "react-native";

export default function HomePage({ navigation }) {
  return (
    <FullScreen>
      <NavBar navigation={navigation} />
      <View style={styles.timeDiv}>
        <TimerValues>
          <Rounds />
          <Clock />
          <PlayCombos />
          <PlayBell />
          <TimerControllers />
        </TimerValues>
      </View>
    </FullScreen>
  );
}

const styles = StyleSheet.create({
    timeDiv:{
        flex:1,
        justifyContent: "space-between",
        paddingTop:20,
        paddingBottom: 40
    }
})