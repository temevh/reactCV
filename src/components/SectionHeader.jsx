import * as React from "react";
import Typography from "@mui/material/Typography";

const SectionHeader = ({ title }) => {
  return (
    <Typography variant="h2" component="div" sx={nameStyle}>
      {title}
    </Typography>
  );
};

export default SectionHeader;

const nameStyle = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  textDecoration: "underline",
  paddingBottom: "0.6rem",
  color: "#ffffff",
};
