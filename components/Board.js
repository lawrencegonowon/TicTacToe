// components/Board.js
import React from "react";
import { View, StyleSheet } from "react-native";
import Square from "./Square";

const Board = ({ board, onPress }) => {
  return (
    <View style={styles.board}>
      {board.map((value, index) => (
        <Square key={index} value={value} onPress={() => onPress(index)} />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  board: {
    flexDirection: "row",
    flexWrap: "wrap",
    width: 300,
  },
});

export default Board;