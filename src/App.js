import "./App.css";
import React from "react";
import NavBar from "./Components/Navbar";
import Hero from "./Components/Hero";
import Brands from "./Components/Brands";
import { Container } from "@mui/material";

function App() {
  return (
    <>
      <NavBar />

      <Container>
        <Hero />
        <Brands />
      </Container>
    </>
  );
}

export default App;
