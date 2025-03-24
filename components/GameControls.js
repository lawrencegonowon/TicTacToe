// components/GameControls.js
import React from "react";
import { View, Button, StyleSheet } from "react-native";

const GameControls = ({ onReset }) => {
  return (
    <View style={styles.controls}>
      <Button title="Restart Game" onPress={onReset} />
    </View>
  );
};

const styles = StyleSheet.create({
  controls: {
    marginTop: 20,
  },
});

export default GameControls;