// src/App.js
import { useState } from 'react';
import Board from './Components/Board';
import isValidCapture from './Logic/IsValidCapture';
import isValidMove from './Logic/IsValidMove';
import { Box } from '@mui/material';



// Function to initialize the board with pieces
const initializeBoard = () => {
  const board = Array(64).fill(null);
  for (let i = 0; i < 64; i++) {
    if ((i % 8 + Math.floor(i / 8)) % 2 === 1) {
      if (i < 24) board[i] = 'B';
      if (i >= 40) board[i] = 'W';
    }
  }
  return board;
};

// Function to initialize the board with pieces
const initial_Board = () => {
  const board = Array(64).fill(null);
  for (let i = 0; i < 64; i++) {
    if ((i % 8 + Math.floor(i / 8)) % 2 === 1) {

      if (i < 24) board[i] = 'B';
      if (i >= 40) board[i] = 'W';
    }
  }
  return board;
};

const App = () => {

  initial_Board()

  const [squares, setSquares] = useState(initializeBoard);


  const [isWhiteNext, setIsWhiteNext] = useState(true);
  const [selectedSquare, setSelectedSquare] = useState(null);


  const handleClick = (i) => {

    if (selectedSquare === null) {
      if (squares[i] && (squares[i] === 'W') === isWhiteNext) {
        setSelectedSquare(i);
      }
      
    } else {
      const newSquares = squares.slice();
      const isWhite = squares[selectedSquare] === 'W';

      if (isValidMove(selectedSquare, i, squares, isWhite)) {
        newSquares[i] = newSquares[selectedSquare];
        newSquares[selectedSquare] = null;

        // King the piece if it reaches the last row
        if (isWhite && Math.floor(i / 8) === 0) {
          newSquares[i] = 'WK'; // White King
        } else if (!isWhite && Math.floor(i / 8) === 7) {
          newSquares[i] = 'BK'; // Black King
        }

        setSquares(newSquares);
        setSelectedSquare(null);
        setIsWhiteNext(!isWhiteNext);
      } else {
        const captured = isValidCapture(selectedSquare, i, squares, isWhite);
        if (captured !== null) {
          newSquares[i] = newSquares[selectedSquare];
          newSquares[selectedSquare] = null;
          newSquares[captured] = null;

          // King the piece if it reaches the last row
          if (isWhite && Math.floor(i / 8) === 0) {
            newSquares[i] = 'WK';
          } else if (!isWhite && Math.floor(i / 8) === 7) {
            newSquares[i] = 'BK';
          }

          setSquares(newSquares);
          setSelectedSquare(null);
          setIsWhiteNext(!isWhiteNext);
        }
      }
    }
  };
  

  return (

    <Box width='99vw' height='99vh' display='flex' justifyContent='center' alignItems='center'> 

      <Box>

        <Board squares={squares} onClick={handleClick} />

      </Box>

    </Box>

  );
};

export default App;
