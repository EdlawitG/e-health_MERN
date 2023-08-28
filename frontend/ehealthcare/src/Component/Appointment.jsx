import React, { useEffect, useState } from "react";
import {
  Stack,
  TextField,
  Typography,
  Select,
  MenuItem,
  Button,
} from "@mui/material";
import Navbar from "./Navbar";
import { useNavigate } from "react-router-dom";
function Appointment() {
  const [displayText, setDisplayText] = useState(true);
  // const [appointment, setAppointment] = useState([{}]);
  const [datetime, setdateTime] = useState("");
  const [user, setUser] = useState([]);
  // const [amount, setAmount] = useState("");
  const [doctor, setDoctor] = useState("");
  const token = localStorage.getItem("token");
  const navigate = useNavigate();
  const handleChange = (e) => {
    setdateTime(e.target.value);
  };
  const handleClick = () => {
    setDisplayText(!displayText);
  };

  useEffect(() => {
    fetch("http://localhost:5000/api/doctors", {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setUser(data);
      });
  }, []);
  async function handleSubmit(e) {
    e.preventDefault();
    const date = datetime.substring(0, 10);
    const time = datetime.substring(11);
    const data = { date, time, doctorId: doctor };
    fetch("http://localhost:5000/api/appointments/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        ...data,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        alert("Appointment Successfully");
        navigate("/");
        console.log(data);
      })
      .catch((error) => console.error(error));
  }
  return (
    <>
      <Navbar />
      <Stack
        direction={"row"}
        width={"100%"}
        height={"80vh"}
        justifyContent={"space-between"}
        sx={{
          backgroundImage: `url("https://img.freepik.com/free-photo/happy-general-practitioner-talking-senior-man-while-shaking-hands-with-him-during-home-visit_637285-1393.jpg?size=626&ext=jpg&ga=GA1.1.1624204321.1680518598&semt=sph")`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <Stack m={"70px"}>
          <Typography
            variant="h2"
            sx={{
              color: "#02307E",
              fontFamily: "san serif",
              fontSize: "7rem",
              textTransform: "uppercase",
            }}
          >
            Book Your Appointment
          </Typography>
        </Stack>
      </Stack>
      <Stack direction={"row"} width={"100%"} justifyContent={"space-between"}>
        <Stack>
          <Stack ml={"15vh"} mt={"50px"} spacing={3} width={"70vh"}>
            <TextField
              type="datetime-local"
              value={datetime}
              onChange={handleChange}
            />
            <Select
              label="Doctors"
              value={doctor}
              onChange={(e) => setDoctor(e.target.value)}
            >
              {user &&
                user.map((doc) => (
                  <MenuItem value={doc._id}>{doc.name}</MenuItem>
                ))}
            </Select>
            {/* <TextField
              type="number"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
            /> */}
            {/* <TextareaAutosize
              placeholder="Anything you want to add"
              minRows={5}
            ></TextareaAutosize> */}

            <Button
              variant="contained"
              sx={{ m: 4, p: 1.5 }}
              onClick={handleSubmit}
            >
              {/* <Link to={`/detail/${1}`} className="link-header"> */}
              Schedule Now
              {/* </Link> */}
            </Button>
          </Stack>
        </Stack>
        <Stack width={"50%"} mb={"40px"}>
          <Stack textAlign={"center"} mb={"20px"} mt={"30px"}>
            <Typography variant="h3" style={{ color: "#02307E" }}>
              FQA
            </Typography>
            <Typography variant="h5" style={{ color: "#2AA7FF" }}>
              Frequently Asked Questions
            </Typography>
          </Stack>
          <Stack style={{ color: "#02307E" }} spacing={2}>
            <Typography variant="h5">
              How can patients access e-healthcareservices?
              <Button sx={{ fontSize: "27px" }} onClick={handleClick}>
                {displayText ? "+" : "-"}
              </Button>
              {!displayText ? (
                <Typography varaiant="h6">
                  Patients can access e-healthcare services through a variety of
                  channels, including online portals, mobile applications, and
                  video conferencing tools. Many healthcare providers also offer
                  virtual visits and consultations as part of their regular
                  services.
                </Typography>
              ) : (
                ""
              )}
            </Typography>
            <Typography variant="h5">
              How can patients access e-healthcareservices?
              <Button sx={{ fontSize: "27px" }}>+</Button>
            </Typography>
            <Typography variant="h5">
              How can patients access e-healthcareservices?
              <Button sx={{ fontSize: "27px" }}>+</Button>
            </Typography>
            <Typography variant="h5">
              How can patients access e-healthcareservices?
              <Button sx={{ fontSize: "27px" }}>+</Button>
            </Typography>
            <Typography variant="h5">
              How can patients access e-healthcareservices?
              <Button sx={{ fontSize: "27px" }}>+</Button>
            </Typography>
            <Typography variant="h5">
              How can patients access e-healthcareservices?
              <Button sx={{ fontSize: "27px" }}>+</Button>
            </Typography>
            <Typography variant="h5">
              How can patients access e-healthcareservices?
              <Button sx={{ fontSize: "27px" }}>+</Button>
            </Typography>
            <Typography variant="h5">
              How can patients access e-healthcareservices?
              <Button sx={{ fontSize: "27px" }}>+</Button>
            </Typography>
          </Stack>
        </Stack>
      </Stack>
    </>
  );
}

export default Appointment;
