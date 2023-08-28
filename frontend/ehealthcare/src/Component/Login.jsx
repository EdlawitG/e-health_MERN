import React, { useState } from "react";
import { Stack, Box, Typography, Button, TextField } from "@mui/material";
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
function Login() {
  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (data.email && data.password) {
      fetch("http://localhost:5000/api/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: data.email, password: data.password }),
      })
        .then((response) => {
          if (!response.ok) {
            setError("Invalid email or password");
            throw new Error(`${response.status} ${response.statusText}`);

          } else {
            
            return response.json();
          }
          
        })
        .then((res) =>{
          localStorage.setItem('token', res['token']);
          const user = JSON.stringify(res);
          localStorage.setItem('user',user);
          console.log(res);
          if(res.accType ==='user'){
            navigate('/')
          }
          else{
            navigate('/hospital')
          }
        })
        .catch((error) => {
          if (
            error.response &&
            error.response.status >= 400 &&
            error.response.status <= 500
          ) {
            setError(error.response.data.message);
          }
        });
    } else {
      setError("Input Values Can Not be Empty");
    }
  };
  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
    // console.log(data);
  };
  return (
    <Stack
      sx={{
        backgroundImage:
          'url("https://img.freepik.com/free-vector/healthcare-background-with-medical-symbols-hexagonal-frame_1017-26363.jpg?size=626&ext=jpg&ga=GA1.2.1624204321.1680518598&semt=sph")',
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "100vh",
      }}
    >
      <Box
        sx={{
          width: "60vh",

          background: "rgba(2,48,126,0.3)",
          margin: "auto",
          textAlign: "center",
          borderRadius: "10px",
        }}
      >
        <Typography variant="h3" style={{ color: "white" }} m={"20px"}>
          Login
        </Typography>

        <form onSubmit={handleSubmit}>
          <Stack spacing={3} m={"30px"}>
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
                  style={{ color: "white", fontSize: "18px" }}
                >
                  {error}
                </Typography>
              </Box>
            ) : (
              ""
            )}
            {/* <StyledInput
              id="outlined-name"
              label="Name"
              type="text"
              name="name"
              value={data.name}
              onChange={handleChange}
              margin="normal"
              variant="outlined"
            /> */}
            <StyledInput
              id="outlined-email"
              label="Email"
              type="email"
              name="email"
              value={data.email}
              onChange={handleChange}
              margin="normal"
              variant="outlined"
            />
            <StyledInput
              id="outlined-password"
              label="Password"
              type="password"
              name="password"
              value={data.password}
              onChange={handleChange}
              margin="normal"
              variant="outlined"
            />
            <Button
              variant="contained"
              sx={{ m: 4, p: 1.5 }}
              onClick={handleSubmit}
            >
              Login
            </Button>
            <Typography style={{ color: "azure" }}>
              Don't have an Account?
              <Link to="/register" className="link-footer">
                SignUp
              </Link>
            </Typography>
          </Stack>
        </form>
      </Box>
    </Stack>
  );
}

export default Login;
