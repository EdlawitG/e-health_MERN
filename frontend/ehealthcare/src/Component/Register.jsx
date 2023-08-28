import { React, useState } from "react";
import {
  Stack,
  Box,
  Typography,
  Button,
  TextField,
  Radio,
  FormControlLabel,
  RadioGroup,
} from "@mui/material";
import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
const StyledInput = styled(TextField)`
  width: 100%;
  & .MuiOutlinedInput-notchedOutline {
    border-color: white;
  }
  & .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline {
    border-color: white;
  }
  .MuiFormLabel-root {
    font-size: 15px !important;
    color: white;
  }
  .MuiOutlinedInput-input {
    font-size: 17px !important;
    color: white;
  }
`;
function Register() {
  const navigate = useNavigate();
  const [value, setValue] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [contactNumber, setcontactNumber] = useState("");
  const [password, setPassword] = useState("");
  const [address, setAddress] = useState("");
  const [error, setError] = useState("");

  const validateEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };
  const validatePassWord = (password) => {
    const upperCaseRegex = /[A-Z]/;
    const specialCharsRegex = /[-!$%^&*()_+|~=`{}[:;<>?,.@#\]]/g;
    const numberRegex = /[0-9]/;
    if (password.length < 8) {
      return "Password must be at least 8 characters long";
    } else if (!upperCaseRegex.test(password)) {
      return "Password must contain at least one uppercase letter";
    } else if (!specialCharsRegex.test(password)) {
      return "Password must contain at least one special character";
    } else if (!numberRegex.test(password)) {
      return "Password must contain at least one number";
    } else {
      return null;
    }
  };

  const handleChange = (event) => {
    setValue(event.target.value);
  };
  async function handleSubmit(e) {
    e.preventDefault();
    if (value === "hospital") {
      if (email && password && name && contactNumber && address) {
        const passErr = validatePassWord(password);
        if (validateEmail(email) && passErr === null) {
          const response = await fetch("http://localhost:5000/api/hospitals/", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              name,
              email,
              contact: contactNumber,
              password,
              address,
            }),
          });
          
          const data = await response.json();
          console.log(data);
          if (response.status === 201) {
            alert("Hospital Added Successfully");
            navigate("/hospital");
          }
        }
        setError(passErr)
      } else {
        setError("Fields can not be empty");
      }
    } else if (value === "user") {
      if (email && password && name) {
        const passErr = validatePassWord(password);
        if (validateEmail(email) && passErr === null) {
          const response = await fetch("http://localhost:5000/api/users/", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              name,
              email,
              password,
            }),
          });
          const data = await response.json();
          console.log(data);
          if (response.status === 201) {
            alert("User Added Successfully");
            navigate("/");
          }
        }
        setError(passErr);
      } else {
        setError("Fields can not be empty");
      }
    } else {
      setError("Choose User or Hospital");
    }
  }
  return (
    <Stack
      sx={{
        backgroundImage:
          'url("https://img.freepik.com/free-vector/clean-medical-background_53876-97927.jpg?size=626&ext=jpg&ga=GA1.2.1624204321.1680518598&semt=ais")',
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "100vh",
      }}
    >
      <Box
        sx={{
          width: "60vh",

          background: "rgba(2,48,126,0.5)",
          margin: "auto",
          textAlign: "center",
          borderRadius: "10px",
        }}
      >
        <Typography variant="h3" style={{ color: "white" }} m={"20px"}>
          Register
        </Typography>
        <form onSubmit={handleSubmit}>
          <Stack spacing={3} m={"30px"}>
            <RadioGroup value={value} onChange={handleChange}>
              <Stack direction={"row"}>
                <FormControlLabel
                  sx={{ color: "#ffffff" }}
                  value="hospital"
                  control={<Radio color="primary" />}
                  label="As Hospital"
                />
                <FormControlLabel
                  sx={{ color: "#ffffff" }}
                  value="user"
                  control={<Radio color="primary" />}
                  label="As User"
                />
              </Stack>
            </RadioGroup>
            {error ? (
              <Box
                style={{
                  background: "red",
                  padding: "10px",
                  borderRadius: "10px",
                }}
              >
                <Typography
                  varaint="subtitle"
                  style={{ color: "white", fontSize: "15px" }}
                >
                  {error}
                </Typography>
              </Box>
            ) : (
              ""
            )}
            {value === "hospital" ? (
              <>
                <StyledInput
                  id="outlined-name"
                  label="Name of Hospital"
                  type="text"
                  name="name"
                  value={name}
                  margin="normal"
                  variant="outlined"
                  onChange={(e) => setName(e.target.value)}
                />
                <StyledInput
                  id="outlined-email"
                  label="Email"
                  type="email"
                  name="email"
                  value={email}
                  margin="normal"
                  variant="outlined"
                  onChange={(e) => setEmail(e.target.value)}
                />
                <StyledInput
                  id="outlined-address"
                  label="Address"
                  type="string"
                  margin="normal"
                  variant="outlined"
                  name="address"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                />
                <StyledInput
                  id="outlined-number"
                  label="Phone Number"
                  type="string"
                  margin="normal"
                  variant="outlined"
                  name="contact"
                  value={contactNumber}
                  onChange={(e) => setcontactNumber(e.target.value)}
                />
              </>
            ) : (
              <>
                <StyledInput
                  id="outlined-name"
                  label="Name"
                  type="text"
                  name="name"
                  value={name}
                  margin="normal"
                  variant="outlined"
                  onChange={(e) => setName(e.target.value)}
                />
                <StyledInput
                  id="outlined-email"
                  label="Email"
                  type="email"
                  name="email"
                  value={email}
                  margin="normal"
                  variant="outlined"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </>
            )}
            <StyledInput
              id="outlined-password"
              label="Password"
              type="password"
              margin="normal"
              value={password}
              variant="outlined"
              onChange={(e) => setPassword(e.target.value)}
            />
            {/* <StyledInput
            id="outlined-confirm"
            label="Confirm Password"
            type="password"
            margin="normal"
            variant="outlined"
          /> */}

            <Button
              variant="contained"
              sx={{ m: 4, p: 1.5 }}
              onClick={handleSubmit}
            >
              register
            </Button>
            <Typography style={{ color: "azure" }}>
              Do you have an Account?
              <Link to="/login" className="link-footer">
                SignIn
              </Link>
            </Typography>
          </Stack>
        </form>
      </Box>
    </Stack>
  );
}

export default Register;
