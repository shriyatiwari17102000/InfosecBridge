import {
  Box,
  Button,
  CardMedia,
  TextField,
  Typography,
  Stack,
} from "@mui/material";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handelSubmit = (e) => {
    e.preventDefault();
    navigate("/user_profile");
  };
  return (
    <>
      <Box
        sx={{
          position: "absolute",
          top: "0px",
          left: "0px",
          width: "375px",
          height: "812px",
          background: "#F7F8F9 0% 0% no-repeat padding-box",
          opacity: 1,
          ml: "36rem",
        }}
      >
        <form>
          <Typography
            sx={{
              position: "absolute",
              top: "40px",
              left: "20px",
              width: "188px",
              height: "69px",
              textAlign: "left",

              fontSize: "28px",
              fontFamily: "Rubik",
              lineHeight: "34px",
              fontWeight: 600,
              letterSpacing: "0px",
              color: "#1D2226",
              opacity: 1,
            }}
          >
            Signin to your PopX account
          </Typography>
          <Typography
            sx={{
              position: "absolute",
              top: "123px",
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
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </Typography>
          <Stack>
            <TextField
              variant="outlined"
              // id="outlined"
              label="Email Address"
              placeholder="Email Address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              sx={{
                position: "absolute",
                top: "204px",
                left: "20px",
                width: "335px",
                height: "9rem",
              }}
            />

            <TextField
              label="Password"
              sx={{
                position: "absolute",
                top: "267px",
                left: "20px",
                width: "335px",
                height: "40px",
              }}
              variant="outlined"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </Stack>
          <Button
            sx={{
              position: "absolute",
              top: "337px",
              left: "20px",
              width: "335px",
              height: "46px",
              background: "#CBCBCB 0% 0% no-repeat padding-box",
              borderRadius: "6px",
              opacity: 1,
            }}
            variant="contained"
            onClick={handelSubmit}
          >
            Login
          </Button>
        </form>
      </Box>
    </>
  );
};

export default Login;
