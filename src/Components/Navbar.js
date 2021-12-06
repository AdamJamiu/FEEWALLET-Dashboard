import "../App.css";
import React from "react";
import { Stack, Menu, MenuItem, Box, Typography, Button } from "@mui/material";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
import MenuIcon from "@mui/icons-material/Menu";

function NavBar() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <Stack
        direction="row"
        justifyContent="space-around"
        alignItems="center"
        className="navbar"
      >
        <Stack direction="row" alignItems="center" spacing={1}>
          <AccountBalanceWalletIcon className="wallet" />
          <Typography variant="h5" color="var(--deep)" fontWeight="bold">
            Feewallet
          </Typography>
        </Stack>

        <Stack
          direction="row"
          display={{ xs: "none", md: "flex" }}
          className="deep"
          spacing={3}
        >
          <Typography fontWeight="bold">Buy & Sell crypto</Typography>
          <Typography fontWeight="bold">Market Price</Typography>
          <Typography fontWeight="bold">Keyless Security</Typography>
          <Typography fontWeight="bold">About Us</Typography>
          <Button
            variant="contained"
            className="cyan-button"
            fontWeight="bolder"
            sx={{
              fontWeight: "bold",
              boxShadow: "0",
              borderRadius: "100px",
              minWidth: "max-content",
            }}
          >
            Create Account
          </Button>
        </Stack>

       
        <Box display={{ xlg: "flex", md: "none" }}>
          <MenuIcon onClick={handleClick} />

          <Menu
          className="deep"
            id="basic-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
              "aria-labelledby": "basic-button",
            }}
          >
            <MenuItem onClick={handleClose}>Buy & Sell crypto</MenuItem>
            <MenuItem onClick={handleClose}>Market Prices</MenuItem>
            <MenuItem onClick={handleClose}>Free Bitcoin</MenuItem>
            <MenuItem onClick={handleClose}>Keyless Security</MenuItem>
            <MenuItem onClick={handleClose}>About Us</MenuItem>
          </Menu>
        </Box>
      </Stack>
    </>
  );
}

export default NavBar;
