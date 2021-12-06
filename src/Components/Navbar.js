import '../App.css';
import React from 'react';
import {Stack, Box, Typography, Button } from '@mui/material';



  

function NavBar() {
  return (
    
   <>
   <Stack direction="row" justifyContent="space-around" alignItems="center" className="navbar">
    <Box>
      <Typography>Feewallet</Typography>
    </Box>
    <Box></Box>
    <Box>
      <Button variant="contained">Crreate Account</Button>
    </Box>
   </Stack>
    </>
  );
}

export default NavBar;
