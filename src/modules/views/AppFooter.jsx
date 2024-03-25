import * as React from "react";
import { Box, Divider, Link } from "@mui/material";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import Typography from "../components/Typography";
import TextField from "../components/TextField";
import WhatsAppp from "../../assets/WhatsAppButtonGreenSmall.svg";
import InstagramIcon from "@mui/icons-material/Instagram";
import fssai from "../../assets/OIP.jpg";

function Copyright() {
  return (
    <React.Fragment>
      {"© "}
      <Link color="inherit" href="https://mui.com/">
        JSK Foods
      </Link>{" "}
      {new Date().getFullYear()}
    </React.Fragment>
  );
}

const iconStyle = {
  width: 48,
  height: 48,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  color: "blue",
  mr: 1,
  "&:hover": {
    color: "red",
  },
};

const LANGUAGES = [
  {
    code: "en-US",
    name: "English",
  },
  {
    code: "fr-FR",
    name: "Hindi",
  },
];

export default function AppFooter() {
  return (
    <Box
      component="footer"
      sx={{
        display: "flex",
        mt: 6,
        pt: 6,
        pb: 6,
        borderTop: "1px solid lightgrey",
      }}
    >
      <Container>
        <Grid width="100%" container spacing={4} pt={2} pb={6}>
          <Grid item xs={3}>
            <Typography variant="h6">Our Promise</Typography>
            All our products are handmade with utmost care in safe and sanitized
            environment, we will never compromise with test and quality.
          </Grid>
          <Grid item xs={3}>
            <Box display="flex" flexDirection="column">
              <Typography variant="h6">About Us</Typography>
              <Link>Our Story</Link>
              <Link>Terms & Conditions</Link>
              <Link>Privacy Policy</Link>
            </Box>
          </Grid>
          <Grid item xs={3}>
            <Box display="flex" flexDirection="column">
              <Typography variant="h6">Customer Care</Typography>
              <Link>Bulk Orders</Link>
              <Link>Track your order</Link>
              <Link>Returns and Refunds</Link>
            </Box>
          </Grid>
          <Grid item xs={3}>
            <Box display="flex" flexDirection="column">
              <Typography variant="h6">Contact Us</Typography>
              <Typography>Plot No. 197B</Typography>
              <Typography>Sharada Nagar</Typography>
              <Typography>Indore-452010</Typography>
              <Typography>Madhya Pradesh</Typography>
            </Box>
          </Grid>
        </Grid>
        <Divider />
        <Box display="flex" justifyContent="space-between" pt={2}>
          <Box>
            <Copyright />
          </Box>
          <Box display="flex" flexDirection="column">
            <img alt="fssai" src={fssai} height={64} />
            <Typography>Lic No. 21424850001581</Typography>
          </Box>
          <Box display="flex" spacing={2} alignItems="center">
            <Box component="a" href="https://mui.com/">
              <Link
                aria-label="Chat on WhatsApp"
                href="https://wa.me/918319998155"
              >
                <img alt="Chat on WhatsApp" src={WhatsAppp} />
              </Link>
            </Box>
            <Box component="a" href="https://instagram.com/jskfoods">
              <InstagramIcon sx={iconStyle} />
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
