import React from "react";
import { Text, StyleSheet, View, Linking } from "react-native";

export default function DeveloperInfo() {
  return (
    <View style={styles.wrapper}>
      <Text style={styles.header}>About The Developer:</Text>
      <NameAndLink name="Github" link="https://github.com/Thefakedeal" />
      <NameAndLink
        name="Instagram"
        link="https://www.instagram.com/thefakedeal"
      />
    </View>
  );
}

function NameAndLink({ name, link, onPress }) {
  const goto = () => {
    Linking.openURL(link);
  };
  return (
    <View
      style={{ display: "flex", flexDirection: "row", alignItems: "center" }}
    >
      <Text style={styles.key}>{name}:</Text>
      <Text style={styles.links} onPress={goto}>
        {link}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    borderColor: "#800080",
    // borderTopWidth: 0.5,
    borderStartWidth: 3
  },
  header: {
    color: "#E5E5E5",
    fontSize: 30,
    fontWeight: "bold",
    margin: 10,
  },
  key: {
    color: "#E5E5E5",
    fontSize: 20,
    fontWeight: "bold",
    margin: 10,
  },
  links: {
    color: "#800080",
    textDecorationLine: "underline",
    fontSize: 15,
    width: 250,
  },
});
