import React from "react";
import { Container, Stack, Typography, Box, Button } from "@mui/material";
import "../App.css";
import SlowMotionVideoIcon from "@mui/icons-material/SlowMotionVideo";
import wallet from "../img/wallet.png";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";
import { createTheme } from '@mui/material/styles';


const Hero = () => {
   createTheme({
    breakpoints: {
      values: {
        xs: 420,
        sm: 600,
        md: 900,
        lg: 1200,
        xl: 1536,
      },
    },
  });

  return (
    <>
      <Container>
        <Stack direction={{ md: "row", xs: "column" }} pt={5} spacing={4}>
          <Box wdith={{xs:'90%', md:'10%'}}>
            <Typography variant="h6" fontWeight="bolder" className="cyan">
              Crypro Wallet __________
            </Typography>
            <Typography color="var(--deep)" fontWeight="900" variant="h3">
              Everything you<br/> need in Crypto,
              <span class="cyan"><br/>simplified</span>
            </Typography>
            <Typography wdith={{xs:'90%', md:'40%'}} pt={3} color="var(--grey)">
              Send, receive and exchange Bitcoin and 100+ cryptocurrencies with
              ease on the world's leading Desktop, Mobile and Hardware crypto
              Wallets
            </Typography>

            <Stack spacing={4} pt={4} direction={{xs:'column', lg:'row'}}>
              <Button
                sx={{
                  minWidth:'fix-content',
                  p: "10px 25px",
                  fontWeight: "bold",
                  borderRadius: "100px",
                  background: "var(--cyan-bg)",
                }}
                variant="contained"
              >
                Get Started
              </Button>
              <Button
                startIcon={<SlowMotionVideoIcon />}
                sx={{
                  minWidth:'max-content',
                  p: " 10px 25px",
                  borderRadius: "100px",
                  color: "black",
                  border: "1px solid #F4F4F4",
                  fontWeight: "bold",
                }}
                variant="outlined"
              >
                Watch Video
              </Button>
            </Stack>

            <Stack direction="row" pt={6} alignItems="center" spacing={2}>
              <Typography fontWeight="bold"> We Support:</Typography>
              <MonetizationOnIcon sx={{color:'#FBA301'}} fontSize="large"/>
              <MonetizationOnIcon sx={{color:'#FBA301'}} fontSize="large"/>
              <MonetizationOnIcon sx={{color:'#FBA301'}} fontSize="large"/>
              <MonetizationOnIcon sx={{color:'#FBA301'}} fontSize="large"/>
            </Stack>
          </Box>

          <Box display={{md:'block', xs:'none'}}>
            <img src={wallet} alt="wallet" />
          </Box>
        </Stack>
       
      </Container>
    </>
  );
};

export default Hero;
