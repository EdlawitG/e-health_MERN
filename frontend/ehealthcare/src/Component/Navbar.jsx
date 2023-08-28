import {
  Button,
  Typography,
  Avatar,
  IconButton,
  Toolbar,
  Menu,
  MenuItem,
} from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { Popup } from "reactjs-popup";
import "reactjs-popup/dist/index.css";
function Navbar() {
  const [anchorEl, setAnchorEl] = useState(null);
  const token = localStorage.getItem("token");
  const navigate = useNavigate();
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleLogout = () => {
    fetch("http://localhost:5000/api/logout/", {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((response) => {
        if (response.ok) {
          // Clear any session-related data in the frontend
          document.cookie =
            "jwt=;expires=Thu, 01 Jan 1970 00:00:00 UTC;path=/;";
          localStorage.removeItem("user");
          // Redirect to the login page or home page
          // window.location.href = "/login";
          navigate("/login");
        } else {
          console.log("Error logging out");
        }
      })
      .catch((error) => {
        console.error("Error:", error);
        // Do something with the error
      });
  };
  return (
    <Toolbar
      sx={{
        background: `rgba(98,188,252,0.55)`,
      }}
    >
      {/* Logo goes here */}
      <Typography
        variant="h6"
        sx={{ flexGrow: 1, fontFamily: "sans-serif", fontSize: "1.25rem" }}
        color={"white"}
      >
        E-HealthCare
      </Typography>

      <Typography
        sx={{ flexGrow: 0.25, fontFamily: "sans-serif", fontSize: "1.25rem" }}
      >
        <Link to="/" className="link-header">
          Home
        </Link>
      </Typography>

      <Typography
        sx={{ flexGrow: 0.25, fontFamily: "sans-serif", fontSize: "1.25rem" }}
        color={"white"}
      >
        <Link to="/about" className="link-header">
          About
        </Link>
      </Typography>
      <Typography
        sx={{ flexGrow: 0.25, fontFamily: "sans-serif", fontSize: "1.25rem" }}
        color={"white"}
      >
        <Link to="/blog" className="link-header">
          Blog
        </Link>
      </Typography>
      <Typography
        sx={{ flexGrow: 0.25, fontFamily: "sans-serif", fontSize: "1.25rem" }}
        color={"white"}
      >
        <Link to="/contactus" className="link-header">
          Contact
        </Link>
      </Typography>

      <Link to="/appointment">
        <Button
          variant="contained"
          color="info"
          sx={{
            fontFamily: "sans-serif",
            fontSize: "1.1rem",
            backgroundColor: "#2AA7FF",
          }}
        >
          Make an appointment
        </Button>
      </Link>
      <Typography
        sx={{
          flexGrow: 0.25,
          fontFamily: "sans-serif",
          fontSize: "1.25rem",
          marginLeft: "50px",
        }}
        color={"black"}
      >
        <IconButton onClick={handleClick}>
          <Avatar sx={{ background: "#183260", fontSize: "30px" }}>P</Avatar>
        </IconButton>
        <Menu
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={handleClose}
        >
          

          <Link className="link-nav">
            <MenuItem onClose={handleClose} onClick={handleLogout}>
              Logout
            </MenuItem>
          </Link>
        </Menu>
      </Typography>
    </Toolbar>
  );
}

export default Navbar;
