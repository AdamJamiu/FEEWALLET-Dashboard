import React from "react";
import { Container, Stack, Typography, Box, Button } from "@mui/material";
import "../App.css";
import SlowMotionVideoIcon from "@mui/icons-material/SlowMotionVideo";
import wallet from "../img/wallet.png";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";

const Hero = () => {
  return (
    <>
      <Container>
        <Stack direction={{ sm: "row", xl: "column" }} pt={5} spacing={4}>
          <Box width={{}}>
            <Typography variant="h6" fontWeight="bolder" className="cyan">
              Crypro Wallet ____________
            </Typography>
            <Typography color="var(--deep)" fontWeight="bolder" variant="h3">
              Everything you need in Crypto,{" "}
              <span class="cyan">simplified</span>
            </Typography>
            <Typography pt={3} color="var(--grey)">
              Send, receive and exchange Bitcoin and 100+ cryptocurrencies with
              ease on the world's leading Desktop, Mobile and Hardware crypto
              Wallets
            </Typography>

            <Stack spacing={4} pt={4} direction="row">
              <Button
                sx={{
                  p: " 10px 25px",
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

            <Stack direction="row" pt={6} alignItems="center" spacing={3}>
              <Typography fontWeight="bold"> We Support:</Typography>
              <MonetizationOnIcon sx={{color:'#FBA301'}} fontSize="large"/>
              <MonetizationOnIcon sx={{color:'#FBA301'}} fontSize="large"/>
              <MonetizationOnIcon sx={{color:'#FBA301'}} fontSize="large"/>
              <MonetizationOnIcon sx={{color:'#FBA301'}} fontSize="large"/>
            </Stack>
          </Box>

          <Box>
            <img src={wallet} alt="wallet" />
          </Box>
        </Stack>

       
      </Container>
    </>
  );
};

export default Hero;
