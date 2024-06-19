import { Box, Stack, Button } from '@mui/material'


const Cell = ({ isWhite, isKing }) => {

  // <div className={`piece ${isWhite ? 'white' : 'black'} ${isKing ? 'king' : ''}`} />

  let value = isWhite? 'red': isKing? 'blue' :'black';
  
  let xs_size = 30;
  let sm_size = 45;
  
  return (
    
    <Box width={{xs: xs_size, sm: sm_size}} height={{xs: xs_size, sm: sm_size}} sx={{ backgroundColor: value, borderRadius: '100%', border: '2px solid brown'}} >

    </Box>
  );
};

export default Cell;