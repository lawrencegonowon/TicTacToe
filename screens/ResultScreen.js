// screens/ResultScreen.js
import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";

const ResultScreen = ({ route, navigation }) => {
  const { winner } = route.params || {};
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{winner ? `${winner} Wins!` : "It's a Draw!"}</Text>
      <Button title="Play Again" onPress={() => navigation.navigate("Game")} />
      <Button title="Home" onPress={() => navigation.navigate("Home")} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
});

export default ResultScreen;