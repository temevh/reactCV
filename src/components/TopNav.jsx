import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

const navElements = [
  "About me",
  "Features",
  "Skills",
  "Projects",
  "Contact me!",
];

function TopNav() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={AppBarStyles}>
        <Toolbar sx={toolbarStyles}>
          <Typography variant="h6" component="div" sx={nameStyles}>
            <b>TH</b>
          </Typography>
          <div>
            {navElements.map((element, index) => (
              <Button
                key={index}
                variant="h6"
                component="div"
                sx={buttonStyles}
              >
                {element}
              </Button>
            ))}
          </div>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default TopNav;

const AppBarStyles = {
  backgroundColor: "#212428",
  color: "#ffffff",
  boxShadow: "none",
  borderBottom: "3px solid #5A5A5A",
};

const nameStyles = {
  textTransform: "capitalize",
  fontSize: "2rem",
  fontWeight: "400",
  letterSpacing: "0.3rem",
  color: "#ffffff",
};

const toolbarStyles = {
  justifyContent: "space-between",
  paddingLeft: "24px", // Adjust as needed
  paddingRight: "24px", // Adjust as needed
};

const buttonStyles = {
  textTransform: "capitalize",
  fontSize: "1.2rem",
  fontWeight: "400",
  letterSpacing: "0.3rem",
  color: "#ffffff",
  "&:hover": {
    backgroundColor: "#FF6B6B",
    color: "#000000",
  },
};
