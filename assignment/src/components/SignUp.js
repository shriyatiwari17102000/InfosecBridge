import {
  Box,
  Button,
  CardMedia,
  TextField,
  Typography,
  Stack,
  FormControl,
  FormLabel,
  FormControlLabel,
  Radio,
  RadioGroup,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const [fullname, setFullname] = useState("");
  const [phonenumber, setPhonenumber] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [company, setCompany] = useState({});
  const [value, setValue] = React.useState("yes");
  const navigate = useNavigate();

  const onChange = (e) => {
    let val = e.target.value;
    switch (e.target.name) {
      case "name":
        setFullname(val);
        break;

      case "education":
        setPhonenumber(val);
        break;

      case "experience":
        setEmail(val);
        break;

      case "mobile":
        setPassword(val);
        break;

      case "email":
        setCompany(val);
        break;

      default:
        console.log("dfgsvhbzxjKNML");
        break;
    }
  };

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
        <form onSubmit={handelSubmit} onChange={onChange}>
          <Typography
            sx={{
              position: "absolute",
              top: "40px",
              left: "20px",
              width: "188px",
              //height: "69px",
              textAlign: "left",
              fontSize: "28px",
              lineHeight: "36px",
              fontFamily: "Rubik",

              fontWeight: 600,
              letterSpacing: "0px",
              color: "#1D2226",
              opacity: 1,
            }}
          >
            Create your PopX account
          </Typography>

          <Stack>
            <TextField
              required
              id="outlined-required"
              label="Full Name"
              name="fullname"
              sx={{
                position: "absolute",
                top: "140px",
                left: "20px",
                width: "335px",
                border: "1px solid #CBCBCB",
                borderRadius: "6px",
                opacity: 1,
              }}
            />
            <TextField
              required
              variant="outlined"
              id="outlined"
              name="phonenumber"
              label="Phone number"
              placeholder="Phone number"
              sx={{
                position: "absolute",
                top: "209px",
                left: "20px",
                width: "335px",
                border: "1px solid #CBCBCB",
                borderRadius: "6px",
                opacity: 1,
              }}
            />
            <TextField
              required
              variant="outlined"
              id="outlined"
              label="Email Address"
              name="email"
              placeholder="Email Address"
              sx={{
                position: "absolute",
                top: "278px",
                left: "20px",
                width: "335px",
                border: "1px solid #CBCBCB",
                borderRadius: "6px",
                opacity: 1,
              }}
            />

            <TextField
              required
              label="Password"
              name="password"
              sx={{
                position: "absolute",
                top: "347px",
                left: "20px",
                width: "335px",
                border: "1px solid #CBCBCB",
                borderRadius: "6px",
                opacity: 1,
              }}
              variant="outlined"
              placeholder="Password"
            />

            <TextField
              variant="outlined"
              id="outlined"
              name="company"
              label="Company"
              sx={{
                position: "absolute",
                top: "416px",
                left: "20px",
                width: "335px",
                border: "1px solid #CBCBCB",
                borderRadius: "6px",
                opacity: 1,
              }}
            />
          </Stack>
          <FormControl>
            <FormLabel
              sx={{
                position: "relative",
                top: "0px",
                left: "0px",
                width: "138px",
                height: "15px",
                textAlign: "left",
                font: "normal normal normal 14px/17px Rubik",
                letterSpacing: "0px",
                color: "#1D2226 !important",
              }}
              id="demo-form-control-label-placement"
            >
              Are you an agency?<span style={{ color: "red" }}>*</span>
            </FormLabel>
            <RadioGroup
              row
              aria-labelledby="demo-form-control-label-placement"
              name="position"
              defaultValue="top"
            >
              <FormControlLabel value={value} control={<Radio />} label="Yes" />
              <FormControlLabel value={value} control={<Radio />} label="No" />
            </RadioGroup>
          </FormControl>

          <Button
            sx={{
              position: "absolute",
              top: "736px",
              left: "20px",
              width: "335px",
              height: "46px",
              background: "#6C25FF 0% 0% no-repeat padding-box",
              borderRadius: "6px",
              opacity: 1,
            }}
            variant="contained"
            onClick={handelSubmit}
          >
            Create Account
          </Button>
        </form>
      </Box>
    </>
  );
};

export default SignUp;
