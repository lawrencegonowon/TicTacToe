import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tic Tac Toe</Text>
      <Button title="Player vs Player" onPress={() => navigation.navigate("Game", { gameMode: "pvp" })} />
      <Button title="Player vs AI" onPress={() => navigation.navigate("Game", { gameMode: "ai" })} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center", backgroundColor: "#f8f8f8" },
  title: { fontSize: 32, fontWeight: "bold", marginBottom: 20 },
});

export default HomeScreen;
