import '../App.css';
import React from 'react';
import {Stack, Box, Typography, Button } from '@mui/material';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';


  

function NavBar() {
  return (
    
   <>
   <Stack direction="row" justifyContent="space-around" alignItems="center" className="navbar">
    <Stack direction="row" alignItems="center" spacing={1}>
      <AccountBalanceWalletIcon className="wallet"/>
      <Typography variant="h5" color="var(--deep)" fontWeight="bold">Feewallet</Typography>
    </Stack>

    <Stack direction="row" className="deep" spacing={3}>
      <Typography fontWeight="bold">Buy & Sell crypto</Typography>
      <Typography fontWeight="bold">Market Price</Typography>
      <Typography fontWeight="bold">Keyless Security</Typography>
      <Typography fontWeight="bold">About Us</Typography>
    </Stack>

    <Box>
      <Button variant="contained" className="cyan-button" sx={{borderRadius:'100px'}}>Crreate Account</Button>
    </Box>
   </Stack>
    </>
  );
}

export default NavBar;
