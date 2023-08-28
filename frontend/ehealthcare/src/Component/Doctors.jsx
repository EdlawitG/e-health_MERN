import { CardMedia, Stack, Typography, Card, CardContent } from "@mui/material";
import Navbar from "./Navbar";
import { useEffect, useState } from "react";
function Doctors() {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/api/doctors", {
      method: "GET",
    })
      .then((res) => res.json())
      .then((data) => setData(data.data));
  }, []);
  return (
    <>
      <Navbar />
      <Stack m={7}>
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
        <Stack m={"20px"}>
          <Card sx={{ maxWidth: 345 }}>
            <CardMedia
              component="img"
              sx={{ height: 400 }}
              image="https://img.freepik.com/free-photo/portrait-experienced-professional-therapist-with-stethoscope-looking-camera_1098-19305.jpg?size=626&ext=jpg&ga=GA1.1.1624204321.1680518598&semt=ais"
            />
            <CardContent>
              {data &&
                data.map((doc) => (
                  <>
                    <Typography
                      gutterBottom
                      variant="h4"
                      component="div"
                      sx={{ fontWeight: "700" }}
                    >
                     {doc.name}
                    </Typography>
                    <Typography variant="h5" style={{ color: "#1B3C74" }}>
                     {doc.specialty}
                    </Typography>
                    <Typography
                      variant="h5"
                      style={{ color: "#2AA7FF", fontStyle: "italic" }}
                    >
                      {doc.email}
                    </Typography>
                  </>
))}
            </CardContent>
          </Card>
        </Stack>
      </Stack>
    </>
  );
}

export default Doctors;
