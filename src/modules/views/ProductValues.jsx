import * as React from "react";

import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import Typography from "../components/Typography";
import background from "../../assets/background.jpg";
import masala from "../../assets/masala.png";
import sweet from "../../assets/sweet.png";
import salted from "../../assets/salted.png";
import { Divider } from "@mui/material";

const item = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  px: 5,
};

function ProductValues() {
  return (
    <Box
      component="section"
      id="products"
      sx={{ display: "flex", overflow: "hidden", bgcolor: "secondary.light" }}
    >
      <Container sx={{ mt: 15, mb: 30, display: "flex", position: "relative" }}>
        <Box
          component="img"
          src="/static/themes/onepirate/productCurvyLines.png"
          alt="curvy lines"
          sx={{ pointerEvents: "none", position: "absolute", top: -180 }}
        />
        <Grid container spacing={5}>
          <Grid item xs={12} md={4}>
            <Box sx={item}>
              <Box
                component="img"
                src={sweet}
                alt="sweet"
                sx={{ height: 264 }}
              />
              <Typography variant="h6" sx={{ my: 5 }}>
                Juicy Amla Candy (Sweet)
              </Typography>
              <Typography variant="h5">
                As soon as you you put this in mouth there is a blast of juices
              </Typography>
              <Box sx={{ pt: 3 }} />
              <Button
                type="submit"
                color="secondary"
                variant="contained"
                sx={{ width: "100%", padding: 1 }}
              >
                Add to cart
              </Button>
            </Box>
          </Grid>
          <Grid item xs={12} md={4}>
            <Box sx={item}>
              <Box
                component="img"
                src={salted}
                alt="graph"
                sx={{ height: 264 }}
              />
              <Typography variant="h6" sx={{ my: 5 }}>
                Juicy Amla Candy (Salted)
              </Typography>
              <Typography variant="h5">
                For people abstaining from suger, this is the nest choice
              </Typography>
              <Box sx={{ pt: 3 }} />
              <Button
                type="submit"
                color="secondary"
                variant="contained"
                sx={{ width: "100%", padding: 1 }}
              >
                Add to cart
              </Button>
            </Box>
          </Grid>
          <Grid item xs={12} md={4}>
            <Box sx={item}>
              <Box
                component="img"
                src={masala}
                alt="clock"
                sx={{ height: 264 }}
              />
              <Typography variant="h6" sx={{ my: 5 }}>
                Juicy Amla Candy (Masala)
              </Typography>
              <Typography variant="h5">
                Longing for that kick, try the new masala candy
              </Typography>
              <Box sx={{ pt: 3 }} />
              <Button
                type="submit"
                color="secondary"
                variant="contained"
                sx={{ width: "100%", padding: 1 }}
              >
                Add to cart
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default ProductValues;
