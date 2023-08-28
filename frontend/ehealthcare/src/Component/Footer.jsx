import React from "react";
import { Stack, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { SocialIcon } from "react-social-icons";
import {BsTelephone} from 'react-icons/bs'
function Footer() {
  return (
    <Stack
      sx={{
        background: `linear-gradient(to top,rgba(98,188,252,0.35), rgba(101,173,129,0))`,
      }}
      direction={"row"}
      justifyContent={"space-between"}
    >
      <Stack m={"20px"} justifyContent={"center"} textAlign={"center"}>
        <Typography
          variant="h6"
          sx={{
            flexGrow: 1,
            fontFamily: "san serif",
            fontSize: "1.5rem",
            fontStyle: "italic",
          }}
          style={{ color: "#2AA7FF" }}
        >
          E-HealthCare
        </Typography>
        <Typography mb={"10px"}>
          203,Fake St. Mountain view, <br />
          Addis Ababa, Ethiopia
        </Typography>

        <Stack spacing={3}>
          <Typography>
            <a
              href="mailto:tzirw@example.com"
              style={{
                textDecoration: "none",
                color: "black",
                fontSize: "20px",
              }}
            >
              <SocialIcon url="https://www.email.com/ehealthcare" style={{marginRight:10}}/>
                info@ehealthcare.com
            </a>
            <br />
            <a
              href="www"
              style={{
                textDecoration: "none",
                color: "black",
                fontSize: "20px",
              }}
            >
              <BsTelephone style={{width:'30px',marginRight:10}}/>
              +251-299-786-85
            </a>
          </Typography>

          <Stack direction={'row'} spacing={3}>
            <SocialIcon url="https://www.facebook.com/ehealthcare"/>
            <SocialIcon url="https://www.twitter.com/ehealthcare" />
            <SocialIcon url="https://www.instagram.com/ehealthcare" />
            <SocialIcon url="https://www.linkedin.com/ehealthcare" />
            <SocialIcon url="https://www.tiktok.com/ehealthcare"/>
          <SocialIcon url="https://www.pinterest.com/ehealthcare"/>
          </Stack>
        </Stack>
      </Stack>
      <Stack direction={"row"}>
        <Stack
          m={"20px"}
          ml={"50px"}
          textAlign={"center"}
          style={{ color: "#183260" }}
        >
          <Typography variant="h5" mb={"20px"}>
            Department
          </Typography>
          <Typography>X-Ray Diagnosis</Typography>
          <Typography>Neurology</Typography>
          <Typography>Hematology Department</Typography>
          <Typography>Pediatrics</Typography>
          <Typography>Cardiology</Typography>
        </Stack>
        <Stack m={"20px"} ml={"50px"} textAlign={"center"}>
          <Typography variant="h5" mb={"20px"}>
            Useful Links
          </Typography>
          <Link to="/about" className="link-footer">
            About
          </Link>
          <Link to="/about" className="link-footer">
            Blog
          </Link>
          <Link to="/about" className="link-footer">
            Contact
          </Link>
          <Link to="/about" className="link-footer">
            Appointment
          </Link>
          <Link to="/about" className="link-footer">
            Doctors
          </Link>
        </Stack>
        <Stack
          m={"20px"}
          ml={"50px"}
          textAlign={"center"}
          style={{ color: "#183260" }}
        >
          <Typography variant="h5" mb={"20px"}>
            Services
          </Typography>
          <Typography>X-Ray Diagnosis</Typography>
          <Typography>Neurology</Typography>
          <Typography>Hematology Department</Typography>
          <Typography>Pediatrics</Typography>
          <Typography>Cardiology</Typography>
        </Stack>
      </Stack>
    </Stack>
  );
}

export default Footer;
