import React, { useState } from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";
import { RadioButton } from "react-native-paper";

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
  const [checked, setChecked] = useState("Easy");

  const LEVELS = [
    {
      key: "1",
      name: "Easy",
    },
    {
      key: "2",
      name: "Medium",
    },
    {
      key: "3",
      name: "Hard",
    },
    {
      key: "4",
      name: "Expert",
    },
  ];

  return (
    <View>
      <Text style={styles.text}>Combos Level </Text>
      <FlatList
        data={LEVELS}
        renderItem={({ item }) => (
         <RadioComponent key={item.key} 
         name={item.name}
         handleOnPress= {
           ()=>{
             setChecked(item.name)
           }
         }
         checked={checked===item.name?true:false}
         />
        )}
      />
    </View>
  );
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
