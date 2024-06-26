import { Box, Stack, Button } from '@mui/material'



const Cell = ({ isWhite, isKing }) => {

  // <div className={`piece ${isWhite ? 'white' : 'black'} ${isKing ? 'king' : ''}`} />

  let value = isWhite? '#660000': isKing? 'blue' :'#004474';
  
  let xs_size = 38;
  let sm_size = 50;
  
  return (
    
    <Box width={{xs: xs_size, sm: sm_size}} height={{xs: xs_size, sm: sm_size}} sx={{ backgroundColor: value, borderRadius: '100%', border: '3px solid #fbf5de'}} >

    </Box>
  );
};



export default Cell;
