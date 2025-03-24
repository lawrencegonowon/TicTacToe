import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tic Tac Toe</Text>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('PlayerVsPlayer')}>
        <Text style={styles.buttonText}>PLAYER VS PLAYER</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('PlayerVsAI')}>
        <Text style={styles.buttonText}>PLAYER VS AI</Text>
      </TouchableOpacity>
    </View>
  );
};

const PlayerVsPlayerScreen = ({ navigation }) => <GameScreen navigation={navigation} mode="PVP" />;
const PlayerVsAIScreen = ({ navigation }) => <GameScreen navigation={navigation} mode="AI" />;

const GameScreen = ({ navigation, mode }) => {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [isXTurn, setIsXTurn] = useState(true);
  const [winner, setWinner] = useState(null);

  const winningCombinations = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8],
    [0, 3, 6], [1, 4, 7], [2, 5, 8],
    [0, 4, 8], [2, 4, 6],
  ];

  const checkWinner = (newBoard) => {
    for (let combo of winningCombinations) {
      const [a, b, c] = combo;
      if (newBoard[a] && newBoard[a] === newBoard[b] && newBoard[a] === newBoard[c]) {
        return newBoard[a];
      }
    }
    return newBoard.includes(null) ? null : 'Tie';
  };

  const handlePress = (index) => {
    if (board[index] !== null || winner) return;

    const newBoard = [...board];
    newBoard[index] = isXTurn ? 'X' : 'O';
    setBoard(newBoard);

    const gameWinner = checkWinner(newBoard);
    if (gameWinner) {
      setWinner(gameWinner);
      return;
    }

    if (mode === "PVP") {
      setIsXTurn(!isXTurn); // Switch turns in PVP mode
    } else if (mode === "AI") {
      setTimeout(() => aiMove(newBoard), 500); // AI plays next
    }
  };

  const aiMove = (currentBoard) => {
    let emptyIndexes = currentBoard.map((val, idx) => (val === null ? idx : null)).filter(idx => idx !== null);
    if (emptyIndexes.length === 0 || winner) return;

    let aiChoice = emptyIndexes[Math.floor(Math.random() * emptyIndexes.length)];
    const newBoard = [...currentBoard];
    newBoard[aiChoice] = 'O';

    setBoard(newBoard);

    const gameWinner = checkWinner(newBoard);
    if (gameWinner) {
      setWinner(gameWinner);
    }
  };

  const restartGame = () => {
    setBoard(Array(9).fill(null));
    setIsXTurn(true);
    setWinner(null);
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" size={24} color="#007BFF" />
        </TouchableOpacity>
        <Text style={styles.modeTitle}>{mode === "PVP" ? "Player vs Player" : "Player vs AI"}</Text>
      </View>
      <Text style={styles.turnText}>
        {winner ? (winner === 'Tie' ? "It's a Tie!" : `Winner: ${winner}`) : `Turn: ${isXTurn ? 'X' : 'O'}`}
      </Text>
      <View style={styles.grid}>
        {board.map((value, index) => (
          <TouchableOpacity key={index} style={styles.cell} onPress={() => handlePress(index)}>
            <Text style={styles.cellText}>{value}</Text>
          </TouchableOpacity>
        ))}
      </View>
      <TouchableOpacity style={styles.button} onPress={restartGame}>
        <Text style={styles.buttonText}>RESTART GAME</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5F5F5',
  },
  header: {
    position: 'absolute',
    top: 50,
    left: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  modeTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginLeft: 10,
  },
  title: {
    fontSize: 36,
    fontWeight: 'bold',
    marginBottom: 30,
  },
  turnText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  button: {
    backgroundColor: '#007BFF',
    paddingVertical: 12,
    paddingHorizontal: 25,
    borderRadius: 8,
    marginVertical: 10,
    elevation: 3,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
  grid: {
    width: 150,
    height: 150,
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginBottom: 20,
  },
  cell: {
    width: 50,
    height: 50,
    borderWidth: 1,
    borderColor: '#000',
    justifyContent: 'center',
    alignItems: 'center',
  },
  cellText: {
    fontSize: 24,
    fontWeight: 'bold',
  },
});

export { HomeScreen, PlayerVsPlayerScreen, PlayerVsAIScreen };
