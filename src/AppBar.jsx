import {
  AppBar,
  Box,
  Divider,
  Menu,
  MenuItem,
  Toolbar,
  Typography,
} from "@mui/material";
import krishnaLogo from "./assets/krishna.png";
import { Image } from "@mui/icons-material";

export default function JSKAppBar(props) {
  return (
    <AppBar maxHeight="64px" backgroundColor="white">
      <Toolbar
        disableGutters
        maxHeight="64px"
        minWidth="100%"
        sx={{ backgroundColor: "blue" }}
      >
        <Box
          maxWidth="64px"
          maxHeight="64px"
          padding="6px"
          borderRight="1px solid"
        >
          <img src={krishnaLogo} className="logo" />
        </Box>
        <Divider orientation="vertical" variant="middle" />
        <Box>
          <Typography color="red">JSK Foods</Typography>
        </Box>
        <Menu>
          <MenuItem>Hello</MenuItem>
        </Menu>
      </Toolbar>
    </AppBar>
  );
}
