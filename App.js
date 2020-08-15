import React from "react";
import { StyleSheet, Text, View, StatusBar } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";

import SettingsPage from "./pages/SettingsPage";

import { TimeSettings } from "./contexts/timeSettings";
import { DifficuiltySettings } from "./contexts/difficuiltySettings";

const Stack = createStackNavigator();


function Navigation(){
  return(
    <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name="Settings" component={SettingsPage}
      options={{
        headerStyle:{
          backgroundColor: '#101010',
        },
        headerTitleStyle:{
          color: '#fff',
          fontSize: 25,
          fontWeight: 'bold',
        }
      }}/>
    </Stack.Navigator>
  </NavigationContainer>
  )
}


export default function App() {
  return (
    <DifficuiltySettings>
      <TimeSettings>
        <View style={styles.container}>
          <Navigation />
          {/* <SettingsPage /> */}
        </View>
      </TimeSettings>
    </DifficuiltySettings>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#090909",
    paddingTop: StatusBar.currentHeight,
    // alignItems: "center",
    // justifyContent: 'center',
  },
});
