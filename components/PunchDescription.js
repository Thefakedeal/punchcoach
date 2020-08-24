import React from "react";
import { View, StyleSheet,Text } from "react-native";

export default function PunchDescription() {
  return (
    <View>
      <Text style={styles.header}> Punches </Text>
      <Text style={styles.punches}> 1 - Jab</Text>
      <Text style={styles.punches}> 2 - Cross</Text>
      <Text style={styles.punches}> 3 - Lead Hook</Text>
      <Text style={styles.punches}> 4 - Rear Hook</Text>
      <Text style={styles.punches}> 5 - Lead Uppercut</Text>
      <Text style={styles.punches}> 6 - Rear Uppercut</Text>
      <Text style={styles.punches}> 7 - Lead Hook to the Body</Text>
      <Text style={styles.punches}> 8 - Rear Hook to the Body</Text>
      <Text style={styles.punches}> 9 - Jab to the Body</Text>
      <Text style={styles.punches}> 10 - Cross to the Body</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    color: "#E5E5E5",
    fontSize: 25,
    fontWeight: "bold",
  },
  punches: {
    color: "#E5E5E5",
    fontSize: 20,
    margin:10,
    // fontWeight: "bold",
  },
});
