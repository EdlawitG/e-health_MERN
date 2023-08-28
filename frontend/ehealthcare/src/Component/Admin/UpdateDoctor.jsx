import React, { useEffect, useState } from "react";
import axios from "axios";
import { Typography, Stack, Button, TextField } from "@mui/material";
import { useNavigate, useParams } from "react-router-dom";
function UpdateDoctor() {
  const [value, setValue] = useState([{}]);
  const { id } = useParams();
  const navigate = useNavigate();
  const token = localStorage.getItem("token");
  useEffect(() => {
    getDoctors(id);
  }, [id]);

  async function getDoctors(id) {
    var response = await axios.get("http://localhost:5000/api/doctors", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    if (response.status === 200) {
      const data = { ...response.data };
      console.log(data[0]);
      setValue({ ...response.data[0] });
    }
  }

  async function UpdateDoctor(data, id) {
    const req = { ...data, userId: id };
    const response = await axios.put(
      `http://localhost:5000/api/doctors/me`,
      req,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    if (response.status === 201) {
      alert("Updated Successfully");
      navigate("/hospital");
    }
  }

  function handleChange(e) {
    setValue({ ...value, [e.target.name]: e.target.value });
  }
  function handleSubmit(e) {
    e.preventDefault();
    UpdateDoctor(value, id);
    // navigate("/hospital");
  }
  return (
    <Stack
      sx={{
        width: "100vh",
        margin: "auto",
        background: `linear-gradient(to bottom,rgba(98,188,252,0.5), rgba(101,173,129,0.1))`,
        textAlign: "center",
        borderRadius: "10px",
        marginTop: "35px",
      }}
    >
      <Typography variant="h3" style={{ color: "white" }} m={"20px"}>
        Update Doctor Info
      </Typography>
      <Stack
        spacing={4}
        width={"60vh"}
        sx={{ margin: "auto", marginBottom: "20px" }}
      >
        <form onSubmit={handleSubmit}>
          <Stack spacing={3}>
            <TextField
              id="outlined-name"
              // label="Name of Doctor"
              type="text"
              name="name"
              margin="normal"
              variant="outlined"
              onChange={handleChange}
              value={value.name}
            />
            <TextField
              id="outlined-name"
              // label="Email"
              type="email"
              name="email"
              margin="normal"
              variant="outlined"
              onChange={handleChange}
              value={value.email}
            />
            <TextField
              id="outlined-name"
              // label="Speciality of the Doctor"
              type="string"
              margin="normal"
              variant="outlined"
              name="speciality"
              onChange={handleChange}
              value={value.speciality}
            />
            <TextField
              id="outlined-name"
              // label="Password"
              type="password"
              margin="normal"
              variant="outlined"
              name="password"
              onChange={handleChange}
              value={value.password}
            />
            <Button variant="contained" onClick={handleSubmit}>
              update
            </Button>
          </Stack>
        </form>
      </Stack>
    </Stack>
  );
}

export default UpdateDoctor;
