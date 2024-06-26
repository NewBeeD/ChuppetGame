import { Box, Stack, Button } from '@mui/material'
import Cell from './Cell';


const Square = ({value, onClick, tile_bg}) => {

  
  return (



      <Box display='flex' justifyContent='center' alignItems='center' size='small' onClick={onClick} sx={{ border: '1px solid black', width: {xs:'50px', sm: '70px'}, height: {xs:'50px', sm: '70px'}, backgroundColor: tile_bg}}>

        {value && <Cell isWhite={value === 'W'} isKing={value} />}

      </Box>
      

    

    

  );
};



export default Square;
