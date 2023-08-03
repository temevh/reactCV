import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

const BoxContainer = ({ bgColor, children }) => {
  const containerStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    width: "60%",
    height: "80vh", // Increase the height to take up more space
    backgroundColor: bgColor,
    color: "#ffffff",
    boxShadow: "none",
    borderRadius: "10px",
    margin: "auto",
    marginBottom: "1rem",
  };

  return <Box sx={containerStyle}>{children}</Box>;
};

const AboutMe = () => {
  return (
    <>
      <BoxContainer bgColor="#5A5A5A">
        <Typography variant="h4" component="div" sx={nameStyle}>
          Hi, I'm <u style={{ color: "#FF6B6B" }}>Teemu</u>.
        </Typography>
        <Typography variant="h5" component="div" sx={descriptionStyle}>
          A <b style={{ color: "#FF6B6B" }}>full-stack</b> developer
        </Typography>
        <Typography variant="h6" component="div" sx={descriptionStyle}>
          I am a <b style={{ color: "#FF6B6B" }}>computer science</b> student
          with a passion for everything tech related.
        </Typography>
        <Typography variant="h6" component="div" sx={descriptionStyle}>
          Currently I am working as a software developer at{" "}
          <b style={{ color: "#FF6B6B" }}>Twoday Finland</b>
        </Typography>
      </BoxContainer>
      <BoxContainer bgColor="#FF6B6B">
        <Typography variant="h6" component="div" sx={nameStyle}>
          I have been working with computers and tech all my life. My earliest
          memories
        </Typography>
      </BoxContainer>
    </>
  );
};

export default AboutMe;

const nameStyle = {
  textTransform: "capitalize",
  fontFamily: "'Poppins', sans-serif",
  fontWeight: "bold",
  margin: "0",
  padding: "0",
  marginBottom: "1rem",
};

const descriptionStyle = {
  textTransform: "capitalize",
  fontFamily: "'Poppins', sans-serif",
  fontWeight: "normal",
  margin: "0",
  padding: "0",
  marginBottom: "0.5rem",
};
