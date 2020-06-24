import React from "react";

// MUI
import { Typography } from "@material-ui/core";

// Components
import Hero from "../components/Hero";

export const Home = () => {
  return (
    <Hero>
      <Typography variant="h1" color="primary.contrastText">
        Welcome To Your Tropical
      </Typography>
      <br />
      <Typography variant="h1" color="primary">
        Paradise
      </Typography>
    </Hero>
  );
};
