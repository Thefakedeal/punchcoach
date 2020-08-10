import React, { useState } from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";
import { RadioButton } from "react-native-paper";

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
          <View key={item.key} style={styles.radioView}>
            <RadioButton
              value={item.name}
              color={"#04C3FF"}
              uncheckedColor={"#C4C4C4"}
              status={checked === item.name ? "checked" : "unchecked"}
              onPress={() => {
                setChecked(item.name);
              }}
            />

            <Text style={styles.radioText}>{item.name}</Text>
          </View>
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
