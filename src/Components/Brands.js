import { Stack, Typography, Box } from "@mui/material";
import React from "react";
import luno from '../img/luno.png';
import ledger from '../img/ledger.png';
import klever from '../img/klever.png';
import crypto from '../img/crypto.jpg';
import binance from '../img/binance.svg';


const Brands = () => {
    return (
        <>
        <Stack direction={{sm:'row',xs:'column'}} spacing={5} alignItems="center" justifyContent="center">
        <img src={luno} width="150px" alt='luno'/>
        <img src={ledger} width="150px" alt='luno'/>
        <img src={crypto} width="150px" alt='luno'/>
        <img src={binance} width="150px" alt='luno'/>
        <img src={klever} width="150px" alt='luno'/>
        </Stack>

        <Whyme />
        </>
    )
}


const Whyme = () => {
    return (
      <>
        <Stack direction={{ sm: "row", xs: "column" }}>
          <Box>
            <Typography className="cyan">Why Choose Me?</Typography>
            <Typography variant="h4" className="deep">
              Buy Cryptocurrency with Feewallet
            </Typography>
          </Box>
        </Stack>
      </>
    );
  };

export default Brands;

