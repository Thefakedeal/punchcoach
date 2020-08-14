import React from 'react';
import { StyleSheet, Text, View, StatusBar } from 'react-native';

import SettingsPage from './pages/SettingsPage'


import {TimeSettings} from './contexts/timeSettings'
import {DifficuiltySettings} from './contexts/difficuiltySettings'

export default function App() {
  return (
    <DifficuiltySettings>
      <TimeSettings>
        <View style={styles.container}>
          <SettingsPage />
        </View>
      </TimeSettings>
    </DifficuiltySettings>
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
