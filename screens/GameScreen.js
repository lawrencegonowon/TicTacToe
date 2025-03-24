import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const GameScreen = ({ route, navigation }) => {
  const { mode } = route.params || { mode: "PlayerVsPlayer" }; // Default to PvP
  const [board, setBoard] = useState(Array(9).fill(null));
  const [isXTurn, setIsXTurn] = useState(true);
  const [winner, setWinner] = useState(null);

  useEffect(() => {
    if (mode === "PlayerVsAI" && !isXTurn) {
      setTimeout(() => aiMove(), 500); // Simulate AI delay
    }
  }, [isXTurn, board]);

  const aiMove = () => {
    const availableMoves = board.map((val, idx) => (val === null ? idx : null)).filter(v => v !== null);
    if (availableMoves.length > 0) {
      const randomMove = availableMoves[Math.floor(Math.random() * availableMoves.length)];
      handlePress(randomMove);
    }
  };

  const handlePress = (index) => {
    if (board[index] !== null || winner) return;
    const newBoard = [...board];
    newBoard[index] = isXTurn ? 'X' : 'O';
    setBoard(newBoard);
    setIsXTurn(!isXTurn);
  };

  return (
    <View style={styles.container}>
      <Text>{mode === "PlayerVsAI" ? "Player vs AI" : "Player vs Player"}</Text>
      <View style={styles.grid}>
        {board.map((value, index) => (
          <TouchableOpacity key={index} style={styles.cell} onPress={() => handlePress(index)}>
            <Text style={styles.cellText}>{value}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  grid: { flexDirection: 'row', flexWrap: 'wrap', width: 150, height: 150 },
  cell: { width: 50, height: 50, borderWidth: 1, justifyContent: 'center', alignItems: 'center' },
  cellText: { fontSize: 24 }
});

export default GameScreen;
