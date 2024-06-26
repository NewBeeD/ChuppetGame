import { Box, Stack, Button, Typography } from '@mui/material'




const Cell = ({ isWhite, isKing }) => {


  let value = isWhite? '#660000': isKing === 'WK'? 'blue': isKing === 'BK'? 'purple' :'#004474';
  
  let xs_size = 38;
  let sm_size = 50;
  
  return (
    
    <Box display='flex' justifyContent='center' alignItems='center' width={{xs: xs_size, sm: sm_size}} height={{xs: xs_size, sm: sm_size}} sx={{ backgroundColor: value, borderRadius: '100%', border: '3px solid #fbf5de'}} >

      {isKing === 'WK'? (
        <Box width={{xs: 30, sm: 40}} height={{xs: 30, sm: 40}} sx={{ backgroundColor: '#660000', borderRadius: '100%', border: '1px solid #fbf5de'}} display='flex' justifyContent='center' alignItems='center'>
          <Box sx={{ fontSize: '30px', fontWeight: 'bold', color: 'white'}}>K</Box>
        </Box>
      ):
      isKing === 'BK'? (
        <Box width={{xs: 10, sm: 42}} height={{xs: 10, sm: 42}} sx={{ backgroundColor: '#004474', borderRadius: '100%', border: '1px solid #fbf5de'}} display='flex' justifyContent='center' alignItems='center'>
          <Box sx={{ fontSize: '30px', fontWeight: 'bold', color: 'white'}}>K</Box>
        </Box>
      ):''}

    </Box>
  );
};



export default Cell;
