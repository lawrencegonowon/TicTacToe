import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";

const Square = ({ value, onPress }) => {
  return (
    <TouchableOpacity style={styles.square} onPress={onPress}>
      <Text style={styles.text}>{value}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  square: {
    width: 100,
    height: 100,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
  },
  text: {
    fontSize: 24,
  },
});

export default Square;