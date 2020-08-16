
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";

import HomePage from "./pages/HomePage"
import SettingsPage from "./pages/SettingsPage";

import NAVROUTES from './navRoutes.json'
const Stack = createStackNavigator();


export default function StackNavigation(){
    return(
      <NavigationContainer>
      <Stack.Navigator initialRouteName={NAVROUTES.HOME}>
        <Stack.Screen name={NAVROUTES.HOME} component={HomePage}
        options={{
            headerShown: false
        }} />
        <Stack.Screen name={NAVROUTES.SETTINGS} component={SettingsPage}
        options={{
          headerStyle:{
            backgroundColor: '#101010',
          },
          headerTitleStyle:{
            color: '#fff',
            fontSize: 25,
            fontWeight: 'bold',
          },
          headerTintColor: '#fff'
        }
    
        }/>
      </Stack.Navigator>
    </NavigationContainer>
    )
  }
  