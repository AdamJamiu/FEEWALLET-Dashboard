import { Stack, Typography, Box } from "@mui/material";
import React from "react";
import luno from "../img/luno.png";
import ledger from "../img/ledger.png";
import klever from "../img/klever.png";
import crypto from "../img/crypto.jpg";
import binance from "../img/binance.svg";

const Brands = () => {
  return (
    <>
      <Stack
        direction={{ sm: "row", xs: "column" }}
        spacing={5}
        alignItems="center"
        justifyContent="center"
      >
        <img src={luno} width="150px" alt="luno" />
        <img src={ledger} width="150px" alt="luno" />
        <img src={crypto} width="150px" alt="luno" />
        <img src={binance} width="150px" alt="luno" />
        <img src={klever} width="150px" alt="luno" />
      </Stack>

      <Whyme />
    </>
  );
};

const Whyme = () => {
  return (
    <>
      <Stack pt={8} pb={5} direction={{ sm: "row", xs: "column",width:'100%' }} spacing={25} alignItems="center">
        <Box>
          <Typography fontWeight="bold" variant="h6" className="cyan">Why Choose Me?</Typography>
          <Typography fontWeight="bold" variant="h3" className="deep">
            Buy Cryptocurrency<br/> with Feewallet
          </Typography>
        </Box>
        <Box width={{sm:'30%',xs:'90%'}}>
          <Typography lineHeight={2} fontSize="medium" className="grey" fontWeight="600">
            Feewallet is a guide to the crypto world created to
            simplify crypto specifics and make access to coins easier.
          </Typography>
        </Box>
      </Stack>
    </>
  );
};

export default Brands;
