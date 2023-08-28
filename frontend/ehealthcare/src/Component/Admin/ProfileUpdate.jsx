import { Stack, Typography, TextField, Button } from "@mui/material";
import React from "react";
import { TbEdit } from "react-icons/tb";
import { Link, useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
function ProfileUpdate() {
  const [value, setValue] = useState([{}]);
  const { id } = useParams();
  const navigate = useNavigate();
  useEffect(() => {
    getHospital(id);
  }, [id]);

  async function getHospital(id) {
    var response = await axios.get(`http://localhost:5000/api/hospitals/${id}`);
    if (response.status === 200) {
      setValue({ ...response.data });
    }
  }

  async function UpdateHospital(data, id) {
    const response = await axios.put(
      `http://localhost:5000/api/hospitals/${id}`,
      data
    );
    if (response.status === 200) {
      alert("updated");
      navigate("/hospital");
    }
  }

  function handleChange(e) {
    setValue({ ...value, [e.target.name]: e.target.value });
  }
  function handleSubmit(e) {
    alert("updated");
    e.preventDefault();
    UpdateHospital(value, id);
  }
  return (
    <Stack
      textAlign={"center"}
      justifyContent={"center"}
      alignItems={"center"}
      m={2}
    >
      <TbEdit style={{ fontSize: "100px" }} />
      <Typography variant="h4" m={4}>
        Update your Profile
      </Typography>
      <Stack
        direction={"row"}
        spacing={5}
        alignItems={"center"}
        justifyContent={"center"}
        marginBottom={5}
      >
        <Stack>
          <TextField
            id="outlined-name"
            label="Name of Hospital"
            type="text"
            name="name"
            margin="normal"
            onChange={handleChange}
            value={value.name}
            variant="outlined"
          />
          <TextField
            id="outlined-name"
            label="Email"
            type="email"
            name="email"
            margin="normal"
            variant="outlined"
            onChange={handleChange}
            value={value.email}
          />
        </Stack>
        <Stack>
          <TextField
            id="outlined-name"
            label="Address"
            type="string"
            margin="normal"
            variant="outlined"
            name="address"
            onChange={handleChange}
            value={value.address}
          />
          <TextField
            id="outlined-name"
            label="Phone Number"
            type="string"
            margin="normal"
            variant="outlined"
            name="contactNumber"
            onChange={handleChange}
            value={value.contactNumber}
          />
        </Stack>
      </Stack>
      <Stack direction={"row"} spacing={5} justifyContent={"center"}>
        <Link to="/hospital">
          <Button
            variant="contained"
            sx={{
              pl: "20px",
              pr: "20px",
              fontSize: "20px",
              background: "#FBF8F0",
              color: "#000000",
            }}
          >
            Cancel
          </Button>
        </Link>
        <Button
          variant="contained"
          sx={{ pl: "20px", pr: "20px", fontSize: "20px" }}
          onClick={handleSubmit}
        >
          Update
        </Button>
      </Stack>
    </Stack>
  );
}

export default ProfileUpdate;
