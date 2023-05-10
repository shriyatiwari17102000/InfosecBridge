import React from "react";
import { Box, Button, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

const Welcome = () => {
  const navigate = useNavigate();
  return (
    <>
      <Box
        sx={{
          background: "#F7F8F9 0% 0% no-repeat padding-box",
          opacity: 1,
          width: "375px",
          height: "812px",
          position: "absolute",
          ml: "36rem",
        }}
      >
        <Typography
          sx={{
            position: "absolute",
            top: "549px",
            left: "20px",
            width: "231px",
            height: "33px",
            fontSize: "28px",
            lineHeight: "17px",
            fontFamily: "Rubik",
            textAlign: "left",
            letterSpacing: "0px",
            color: "#1D2226",
            opacity: "1",
            fontWeight: "600",
          }}
        >
          Welcome to PopX
        </Typography>
        <Typography
          sx={{
            position: "absolute",
            top: "592px",
            left: "20px",
            width: "232px",
            height: "48px",
            textAlign: "left",
            font: "normal normal normal 18px/26px Rubik",
            letterSpacing: "0px",
            color: "#1D2226",
            opacity: "0.6",
          }}
        >
          Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        </Typography>
        <Button
          sx={{
            position: "absolute",
            top: "669px",
            left: "20px",
            width: "335px",
            height: "46px",
            background: "#6C25FF 0% 0% no-repeat padding-box",
            borderRadius: "6px",

            opacity: 1,
            fontSize: "16px",
            lineHeight: "17px",
            fontFamily: "Rubik",
            textTransform: "initial",
            color: "white",
          }}
          variant="contained"
          onClick={() => {
            navigate("/signup");
          }}
        >
          Create Account
        </Button>
        <Button
          sx={{
            position: "absolute",
            top: "725px",
            left: "20px",
            width: "335px",
            height: "46px",
            background: "#6C25FF4B 0% 0% no-repeat padding-box",
            opacity: 1,
            color: "#1D2226",
            fontSize: "16px",
            lineHeight: "17px",
            textTransform: "initial",
            fontFamily: "Rubik",
            letterSpacing: "0px",
            fontWeight: "600",
          }}
          variant="contained"
          onClick={() => {
            navigate("/login");
          }}
        >
          Already Registered ? Login
        </Button>
      </Box>
    </>
  );
};

export default Welcome;
