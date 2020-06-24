import React from "react";
import Hero from "../components/Hero";

// MUI
import { Typography } from "@material-ui/core";

export const Error = () => {
  return (
    <Hero>
      <Typography variant="h1" color="primary">
        404
      </Typography>
      <br />
      <Typography variant="h1">Page Not Found</Typography>
    </Hero>
  );
};
