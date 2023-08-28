import { Stack, Typography, Card, CardContent, Button } from "@mui/material";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
import axios from "axios";
function AdminHome() {
  const [data, setData] = useState([{}]);
  const navigate = useNavigate();
  const [i, setI] = useState(false);
  const token = localStorage.getItem('token');
  async function getDoctors() {
    await fetch(" http://localhost:5000/api/doctors/", {
      method: "GET",
      headers: {
        "Authorization": `Bearer ${token}`,
      },

    })
      .then((res) => res.json())
      .then((json) => {
        console.log(json)
        setData(json)});
  }

  useEffect(() => {
    getDoctors();
  }, [i]);
  async function handleDelete(id) {
    if (window.confirm("Are You Sure you want to Delete?")) {
      const response = await axios.delete(
        `http://localhost:5000/api/doctors/${id}`,{
          headers: {
            "Authorization": `Bearer ${token}`,
          },
        }
      );
       if (response.status === 204) {
        alert("One Doctor Info has been deleted successfully!!!");
        getDoctors();
        navigate("/hospital");
      }
    }
  }
  return (
    <>
      <Navbar />
      <Stack m={5}>
        <Typography
          variant="h2"
          sx={{
            fontFamily: "san serif",
            fontSize: "3rem",
            textTransform: "uppercase",
            textAlign: "center",
            color: "#10203D",
          }}
          mb={5}
        >
          Our Doctors / Nurses
        </Typography>
        <Link to="/adddoctor" className="link-header">
          <Button
            variant="contained"
            sx={{ width: "40vh", padding: "15px", fontSize: "1.2rem" }}
          >
            Add New Doctor
          </Button>
        </Link>
        <Stack m={"20px"} sx={{display:'flex',flexDirection:'row', flexWrap:'wrap'}}>
          {data &&
            data.map((user, index) => (
              <Card sx={{ maxWidth: 345, mr:3}} key={index}>
                <CardContent>
                  <Typography
                    gutterBottom
                    variant="h4"
                    component="div"
                    sx={{ fontWeight: "700" }}
                  >
                    {user.name}
                  </Typography>
                  <Typography variant="h5" style={{ color: "#1B3C74" }}>
                    {user.speciality}
                  </Typography>
                  <Typography
                    variant="h5"
                    style={{ color: "#2AA7FF", fontStyle: "italic" }}
                  >
                    {user.email}
                  </Typography>
                  <Stack m={2} direction="row" spacing={3}>
                    <Link to={`/updatedoctor/${user._id}`}>
                      <Button variant="contained" color="info">
                        Update
                      </Button>
                    </Link>
                    <Button variant="contained" color="info">
                      View
                    </Button>
                    <Button
                      variant="contained"
                      color="error"
                      onClick={()=>handleDelete(user._id)}
                    >
                      Delete
                    </Button>
                  </Stack>
                </CardContent>
              </Card>
            ))}
        </Stack>
      </Stack>
    </>
  );
}

export default AdminHome;
