import * as React from "react";
import AppBar from "../components/AppBar";
import { Box, Link } from "@mui/material";
import Toolbar from "../components/Toolbar";
import krishnaLogo from "../../assets/krishna.png";

const rightLink = {
  fontSize: 16,
  color: "common.white",
  ml: 3,
};

function AppAppBar() {
  return (
    <div>
      <AppBar position="fixed">
        <Toolbar sx={{ justifyContent: "space-between" }}>
          <Link
            variant="h6"
            underline="none"
            color="inherit"
            href="/"
            sx={{ fontSize: 24 }}
            display="flex"
            alignItems="center"
          >
            <img src={krishnaLogo} className="logo" />
            {"JSK Foods"}
          </Link>
          {/* <Box sx={{ flex: 1 }} /> */}
          <Box>
            <Link variant="h6" underline="none" href="#products" sx={rightLink}>
              {"Our Products"}
            </Link>
            <Link variant="h6" underline="none" href="#benefits" sx={rightLink}>
              {"Amla Benefits"}
            </Link>
          </Box>
          <Box sx={{ flex: 1, display: "flex", justifyContent: "flex-end" }}>
            <Link variant="h6" underline="none" href="/sign-in" sx={rightLink}>
              {"Sign In"}
            </Link>
            <Link
              variant="h6"
              underline="none"
              href="/signup"
              sx={{ ...rightLink, color: "secondary.main" }}
            >
              {"Sign Up"}
            </Link>
          </Box>
        </Toolbar>
      </AppBar>
      <Toolbar />
    </div>
  );
}

export default AppAppBar;
