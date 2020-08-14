import React, { useState } from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";
import { RadioButton } from "react-native-paper";


import {useComboLevel,combosLevels, useSpeed, speedLevels} from '../contexts/difficuiltySettings'

function RadioComponent({name,checked,handleOnPress}){
  return(
    <View style={styles.radioView}>
            <RadioButton
              value={name}
              color={"#04C3FF"}
              uncheckedColor={"#C4C4C4"}
              status={checked===true?'checked':'unchecked'}
              onPress={handleOnPress}
            />
            <Text style={styles.radioText}>{name}</Text>
          </View>
  )
}

export function CombosLevel() {
  const [comboLevel, setComboLevel]= useComboLevel();

  return (
    <View>
      <Text style={styles.text}>Combos Level </Text>
      <FlatList
        data={combosLevels}
        renderItem={({ item }) => (
         <RadioComponent key={item.id} 
         name={item.name}
         handleOnPress= {
           ()=>{
             setComboLevel(item.name)
           }
         }
         checked={comboLevel===item.name?true:false}
         />
        )}
      />
    </View>
  );
}

export function SpeedSettings(){
  const [speed, setSpeed] = useSpeed();

  return(
    <View>
      <Text style={styles.text}>Speed Levels</Text>
      <FlatList
        data={speedLevels}
        renderItem={ ({item})=>(
          <RadioComponent key= {item.id}
          name= {item.name}
          handleOnPress= {
            ()=>{
              setSpeed(item.name)
            }
          }
          checked= {speed===item.name?true:false}
          />
        )
        }
        />
    </View>
  )

}

const styles = StyleSheet.create({
  radioView: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
  },
  radioText: {
    color: "#E5E5E5",
    fontSize: 20,
    fontWeight: "bold",
  },
  text: {
    color: "#E5E5E5",
    fontSize: 25,
    fontWeight: "bold",
    margin: 5
  },
});
