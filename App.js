// import { StatusBar as SB } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, StatusBar } from 'react-native';

import SettingsPage from './components/SettingsPage'


import {TimeSettings, useRestTime} from './contexts/timeSettings'
export default function App() {
  return (
    <TimeSettings>

    <View style={styles.container}>
    <SettingsPage />
    </View>

    </TimeSettings>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#090909',
    paddingTop: StatusBar.currentHeight,
    alignItems: 'center',
    // justifyContent: 'center',
  },
});
