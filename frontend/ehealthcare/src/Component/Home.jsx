import {
  CardMedia,
  Stack,
  Typography,
  Button,
  Card,
  CardContent,
} from "@mui/material";
import { GrEmergency, GrSchedule } from "react-icons/gr";
import { FaBriefcaseMedical } from "react-icons/fa";
import { TfiTime } from "react-icons/tfi";
import Footer from "./Footer";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
import { useState, useEffect } from "react";

const myImage = require("../assets/hematology.png");
const doc = require("../assets/docfemale.png");
const xray = require("../assets/x-ray.png");
const brain = require("../assets/brain.png");
const ambulance = require("../assets/ambulance.png");
const pharmacy = require("../assets/drugs.png");
const stereoscope = require("../assets/stereoscope.png");
function Home() {
  const [data, setData] = useState([{}]);
  const token = localStorage.getItem("token");
  const user = JSON.parse(localStorage.getItem('user'));
  const navigate = useNavigate()
  if(!token){
     navigate('/login');
  } 
  else if(user.accType === 'hospital'){
    navigate('/hospital')
  }
  async function getDoctors() {
    await fetch(" http://localhost:5000/api/doctors/", {
      method: "GET",
    })
      .then((res) => res.json())
      .then((json) => setData(json));
  }

  useEffect(() => {
    getDoctors();
  }, []);
  return (
    <>
      <Navbar />

      <Stack
        direction={"row"}
        sx={{
          background: `linear-gradient(to bottom,rgba(98,188,252,0.55), rgba(101,173,129,0.1))`,
        }}
      >
        <Stack direction={"column"} spacing={3} ml={"80px"}>
          <Typography
            variant="h6"
            sx={{
              fontFamily: "sans-serif",
              fontStyle: "italic",
              fontSize: "20px",
            }}
          >
            Welcome to E-HealthCare
          </Typography>
          <Typography
            variant="h2"
            sx={{
              width: "75%",
              fontFamily: "Inter",
              fontSize: "5rem",
              textTransform: "uppercase",
              color: "#183260",
            }}
          >
            Your Health is Our Priority
          </Typography>
          <Typography sx={{ width: "60%" }}>
            E-HealthCare is an online platform that provides convenient and
            accessible healthcare services to patients. Our team of qualified
            healthcare professionals offer virtual consultations, medical
            advice, and prescription refills to help you manage your health from
            the comfort of your own home. <br />
            <Link to="/about">
              <Button
                variant="outlined"
                sx={{ borderWidth: 2, margin: "20px" }}
              >
                Read more...
              </Button>
            </Link>
          </Typography>
        </Stack>
        <Stack mr={"80px"} sx={{ width: "50%" }} mt={"50px"}>
          <CardMedia
            component={"img"}
            sx={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              // borderRadius: "50%",
            }}
            alt="Female Doctor"
            // image="https://img.freepik.com/free-photo/beautiful-young-female-doctor-looking-camera-office_1301-7807.jpg?size=626&ext=jpg&ga=GA1.2.1624204321.1680518598&semt=sph"
            image={doc}
          />
        </Stack>
      </Stack>
      <Stack direction={"row"} m={"50px"}>
        <Stack>
          <Card>
            <CardContent>
              <Stack
                direction={"column"}
                spacing={3}
                alignItems={"center"}
                justifyContent={"center"}
              >
                <GrSchedule size={"50"} />
                <Typography
                  style={{ color: "#10203D" }}
                  sx={{ fontSize: "20px" }}
                >
                  Make an Appointment
                </Typography>
                <Typography
                  style={{ color: "#2AA7FF" }}
                  sx={{ fontSize: "15px" }}
                >
                  Don't wait until it's too late - take charge of your health
                  today and schedule your appointment with us.
                </Typography>
                <Link to="/appointment">
                  <Button variant="outlined" sx={{ borderWidth: 3 }}>
                    Make appointment
                  </Button>
                </Link>
              </Stack>
            </CardContent>
          </Card>
        </Stack>
        <Stack ml={"50px"}>
          <Card>
            <CardContent>
              <Stack
                direction={"column"}
                spacing={3}
                alignItems={"center"}
                justifyContent={"center"}
              >
                <GrEmergency size={"50"} />
                <Typography
                  style={{ color: "#10203D" }}
                  sx={{ fontSize: "20px" }}
                >
                  Emergency Cases
                </Typography>
                <Typography
                  style={{ color: "#2AA7FF" }}
                  sx={{ fontSize: "15px" }}
                >
                  Don't wait until it's too late - take charge of your health
                  today and schedule your appointment with us.
                </Typography>
                <Link to="/appointment">
                  <Button variant="outlined" sx={{ borderWidth: 3 }}>
                    Contact us
                  </Button>
                </Link>
              </Stack>
            </CardContent>
          </Card>
        </Stack>
        <Stack ml={"50px"}>
          <Card>
            <CardContent>
              <Stack
                direction={"column"}
                spacing={3}
                alignItems={"center"}
                justifyContent={"center"}
              >
                <FaBriefcaseMedical size={"50"} />
                <Typography
                  style={{ color: "#10203D" }}
                  sx={{ fontSize: "20px" }}
                >
                  Our Doctors
                </Typography>
                <Typography
                  style={{ color: "#2AA7FF" }}
                  sx={{ fontSize: "15px" }}
                >
                  Don't wait until it's too late - take charge of your health
                  today and schedule your appointment with us.
                </Typography>
                <Link to="/doctors">
                  <Button variant="outlined" sx={{ borderWidth: 3 }}>
                    learn more...
                  </Button>
                </Link>
              </Stack>
            </CardContent>
          </Card>
        </Stack>
        <Stack ml={"50px"}>
          <Card>
            <CardContent>
              <Stack
                direction={"column"}
                spacing={3}
                alignItems={"center"}
                justifyContent={"center"}
              >
                <TfiTime size={"50"} />
                <Typography
                  style={{ color: "#10203D" }}
                  sx={{ fontSize: "20px" }}
                >
                  Working Time
                </Typography>
                <Typography
                  style={{ color: "#2AA7FF" }}
                  sx={{ fontSize: "15px" }}
                >
                  Don't wait until it's too late - take charge of your health
                  today and schedule your appointment with us.
                </Typography>
                <Link to="/appointment">
                  <Button variant="outlined" sx={{ borderWidth: 3 }}>
                    learn more...
                  </Button>
                </Link>
              </Stack>
            </CardContent>
          </Card>
        </Stack>
      </Stack>
      <Stack>
        <Typography
          variant="h2"
          sx={{
            fontFamily: "san serif",
            fontSize: "3rem",
            textTransform: "uppercase",
            textAlign: "center",
            color: "#10203D",
          }}
        >
          Total Health Care Solutions
        </Typography>
        <Stack
          direction={"row"}
          spacing={15}
          sx={{ justifyContent: "center" }}
          m={10}
        >
          <Stack sx={{ textAlign: "center", alignItems: "center" }}>
            <CardMedia
              component={"img"}
              sx={{
                width: "90px",
              }}
              alt="icon"
              image={myImage}
            />

            <Typography variant="h5">Neurology</Typography>
            <Typography variant="body1">
              Ease your pain and soothe your joints
            </Typography>
          </Stack>
          <Stack sx={{ textAlign: "center", alignItems: "center" }}>
            <CardMedia
              component={"img"}
              sx={{
                width: "90px",
              }}
              alt="icon"
              image={brain}
            />

            <Typography variant="h5">X-ray diagnostic</Typography>
            <Typography variant="body1">
              Ease your pain and soothe your joints
            </Typography>
          </Stack>
          <Stack sx={{ textAlign: "center", alignItems: "center" }}>
            <CardMedia
              component={"img"}
              sx={{
                width: "90px",
              }}
              alt="icon"
              image={xray}
            />

            <Typography variant="h5">Pediatrics</Typography>
            <Typography variant="body1">
              Ease your pain and soothe your joints
            </Typography>
          </Stack>
        </Stack>
        <Stack
          direction={"row"}
          spacing={15}
          sx={{ justifyContent: "center" }}
          mb={10}
        >
          <Stack sx={{ textAlign: "center", alignItems: "center" }}>
            <CardMedia
              component={"img"}
              sx={{
                width: "90px",
              }}
              alt="icon"
              image={stereoscope}
            />

            <Typography variant="h5">Pharmacy</Typography>
            <Typography variant="body1">
              Ease your pain and soothe your joints
            </Typography>
          </Stack>
          <Stack sx={{ textAlign: "center", alignItems: "center" }}>
            <CardMedia
              component={"img"}
              sx={{
                width: "90px",
              }}
              alt="icon"
              image={pharmacy}
            />

            <Typography variant="h5">Hematology</Typography>
            <Typography variant="body1">
              Ease your pain and soothe your joints
            </Typography>
          </Stack>
          <Stack sx={{ textAlign: "center", alignItems: "center" }}>
            <CardMedia
              component={"img"}
              sx={{
                width: "90px",
              }}
              alt="icon"
              image={ambulance}
            />

            <Typography variant="h5">Ambulance Service</Typography>
            <Typography variant="body1">
              Ease your pain and soothe your joints
            </Typography>
          </Stack>
        </Stack>
      </Stack>
      <Stack>
        <Typography
          variant="h2"
          sx={{
            fontFamily: "san serif",
            fontSize: "3rem",
            textTransform: "uppercase",
            textAlign: "center",
            color: "#10203D",
          }}
        >
          Our Qualified Doctors
        </Typography>
        <Stack m={"20px"}>
          {data &&
            data.map((doc) => (
              <Card sx={{ maxWidth: 345 }}>
                <CardContent>
                  <Typography
                    gutterBottom
                    variant="h4"
                    component="div"
                    sx={{ fontWeight: "700" }}
                  >
                    {doc.name}
                  </Typography>
                  <Typography variant="h5" style={{ color: "#1B3C74" }}>
                    {doc.speciality}
                  </Typography>
                  <Typography
                    variant="h5"
                    style={{ color: "#2AA7FF", fontStyle: "italic" }}
                  >
                    {doc.email}
                  </Typography>
                </CardContent>
              </Card>
            ))}
        </Stack>
      </Stack>
      <Footer />
    </>
  );
}

export default Home;
