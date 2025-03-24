import React, { createContext, useState } from "react";

export const GameContext = createContext();

export const GameProvider = ({ children }) => {
  const [scores, setScores] = useState({ player1: 0, player2: 0 });
  const [currentPlayer, setCurrentPlayer] = useState("player1");

  return (
    <GameContext.Provider value={{ scores, setScores, currentPlayer, setCurrentPlayer }}>
      {children}
    </GameContext.Provider>
  );
};
