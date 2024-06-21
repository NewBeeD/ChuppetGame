import { Box, Stack, Button } from '@mui/material'
import Cell from './Cell';

const Square = ({value, onClick}) => {

  const xs_size = 45;
  const sm_size = 70;
  
  return (
    
    <Button onClick={onClick} sx={{ border: '1px solid black', width: {xs:xs_size ,sm: sm_size}, height: {xs:xs_size ,sm:sm_size}, borderRadius: 0, display: 'flex', justifyContent: 'center', alignItems: 'center', position: 'relative'}} >

      {value && <Cell isWhite={value === 'W' || value === 'WK'} isKing={value === 'WK' || value === 'BK'} />}

    </Button>

  );
};

export default Square;
