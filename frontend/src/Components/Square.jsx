import { Box, Stack, Button } from '@mui/material'
import Cell from './Cell';


const Square = ({value, onClick}) => {

 

  // let board_background = [...value];
  
  return (



      <Box display='flex' justifyContent='center' alignItems='center' size='small' onClick={onClick} sx={{ border: '1px solid black', width: {xs:'50px', sm: '70px'}, height: {xs:'50px', sm: '70px'}}}>

        {value && <Cell isWhite={value === 'W' || value === 'WK'} isKing={value === 'WK' || value === 'BK'} />}

      </Box>
      

    

    

  );
};



export default Square;
