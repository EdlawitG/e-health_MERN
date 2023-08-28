import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Typography,
  Button,
} from "@mui/material";
import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";
import axios from "axios";
import { useNavigate } from "react-router-dom";
function ListOfAppointment() {
  const [appointments, setAppointment] = useState([]);
  const navigate = useNavigate();
  const token = localStorage.getItem("token");
  async function getAppointment() {
    await fetch(" http://localhost:5000/api/appointments", {
      method: "GET",
      headers: {
        // "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => res.json())
      .then((json) => setAppointment(json));
  }

  useEffect(() => {
    getAppointment();
  }, []);
  async function handleDelete(id) {
    if (window.confirm("Are You Sure you want to Delete?")) {
      const response = await axios.delete(
        `http://localhost:5000/api/appointments/${id}`,{
          headers: {
            "Authorization": `Bearer ${token}`,
          },
        }
      );
       if (response.status === 204) {
        alert("One Doctor Info has been deleted successfully!!!");
        getAppointment();
        navigate("/hospital");
      }
    }
  }
  return (
    <>
      <Navbar />
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
        mt={5}
      >
        List of Appointmnets
      </Typography>
      <TableContainer component={Paper} sx={{ width: "90%", margin: "auto" }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell
                sx={{ fontSize: "25px", fontWeight: "500", color: "#2AA7FF" }}
              >
                Name Of Doctor
              </TableCell>
              <TableCell
                sx={{ fontSize: "25px", fontWeight: "500", color: "#2AA7FF" }}
              >
                Date
              </TableCell>
              <TableCell
                sx={{ fontSize: "25px", fontWeight: "500", color: "#2AA7FF" }}
              >
                Time
              </TableCell>
              {/* <TableCell
                sx={{ fontSize: "25px", fontWeight: "500", color: "#2AA7FF" }}
              >
                Message
              </TableCell> */}
            </TableRow>
          </TableHead>
          <TableBody>
            {appointments &&
              appointments.map((appointment) => (
                <TableRow component="th" scope="row">
                  <>
                    <TableCell sx={{ fontSize: "20px", color: "#10203D" }}>
                      {/* {console.log(appointment.user)} */}
                      {appointment.doctor}
                    </TableCell>
                    <TableCell sx={{ fontSize: "20px", color: "#10203D" }}>
                      {appointment.date}
                    </TableCell>
                    <TableCell sx={{ fontSize: "20px", color: "#10203D" }}>
                      {appointment.time}
                    </TableCell>
                    <TableCell>
                      {/* <Button variant="outlined">View</Button> */}
                      <Button
                        variant="outlined"
                        color="error"
                        onClick={() =>{
                          // console.log(appointment.id);
                          handleDelete(appointment.user)}}
                      >
                        Delete
                      </Button>
                    </TableCell>
                  </>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}

export default ListOfAppointment;
