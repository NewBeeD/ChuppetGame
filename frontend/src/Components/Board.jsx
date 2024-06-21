import { Box, Stack, Button } from '@mui/material'
import Square from './Square';


const Board = ({ squares, onClick }) => {

  const renderSquare = (i) => (
    <Square key={i} value={squares[i]} onClick={() => onClick(i)} />
  );

  const createBoard = () => {
    
    let board = [];
    
    for (let row = 0; row < 8; row++) {
      
      let rowSquares = [];
      
      for (let col = 0; col < 8; col++) {
        rowSquares.push(renderSquare(row * 8 + col));
      }



      board.push(
        <Box key={row} display='flex'>
          {rowSquares}
        </Box>
      );
    }

    return board;
  };


  return (
    <Box sx={{ border: '3px solid black'}}>

      {createBoard()}  

    </Box>
  );
};

export default Board;
