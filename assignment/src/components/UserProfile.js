import React, { useState } from "react";
import { Box, Button, Typography, Stack, CardMedia } from "@mui/material";
import Ellipse from "../images/Ellipse.png";
import Group from "../images/Group.png";
import { useNavigate } from "react-router-dom";

const UserProfile = () => {
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
          border: "2px solid #F7F8F9",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: "0px",
            left: "0px",
            width: "375px",
            height: "68px",
            background: "#FFFFFF 0% 0% no-repeat padding-box",
            boxShadow: "0px 3px 6px #00000007",
            opacity: 1,
          }}
        >
          <Typography
            sx={{
              position: "absolute",
              top: "27px",
              left: "15px",
              width: "146px",
              height: "22px",
              textAlign: "left",
              font: "normal normal normal 18px/21px Rubik",
              letterSpacing: "0px",
              color: "#1D2226",
              textTransform: "capitalize",
              opacity: 1,
            }}
          >
            Account Setting
          </Typography>
        </div>

        <Stack>
          <CardMedia
            className="ellipse_img"
            component="img"
            image={Ellipse}
            alt="Login Image"
          />
          <CardMedia
            className="camera_img"
            component="img"
            image={Group}
            alt="Login Image"
          />
          <Typography className="para_1">Marry Doe</Typography>
          <Typography className="para_2">Marry@gmail.com</Typography>
          <Typography className="para_3">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quasi
            officiis assumenda ducimus id dolor quaerat in eligendi.
          </Typography>
        </Stack>
        <div
          style={{
            position: "absolute",
            top: "287px",
            left: "0px",
            width: "375px",
            height: "0px",
            border: "1px dashed #CBCBCB",
            opacity: 1,
          }}
        ></div>
        <div
          style={{
            position: "absolute",
            top: "776px",
            left: "0px",
            width: "375px",
            height: "0px",
            border: "1px dashed #CBCBCB",
            opacity: 1,
          }}
        ></div>
      </Box>
    </>
  );
};

export default UserProfile;
