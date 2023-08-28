import { Card, Stack, CardContent, Typography, Button } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

function Detail() {
  return (
    <Stack
      sx={{
        background: `linear-gradient(to bottom,rgba(98,188,252,0.3), rgba(101,173,129,0.1))`,
      }}
    >
      <Stack
        sx={{
          alignItems: "center",
        }}
        mt={10}
      >
        <Card
          sx={{
            width: "50%",
            justifyContent: "center",
            background: "whitesmoke",
          }}
        >
          <CardContent>
            <Stack
              spacing={10}
              direction={"row"}
              sx={{ justifyContent: "center", width: "100%" }}
              m={1}
            >
              <Stack spacing={4}>
                <Typography variant="h5">Name</Typography>
                <Typography variant="h5">Phone Number</Typography>
                <Typography variant="h5">Email</Typography>
                <Typography variant="h5">Date/Time</Typography>
                <Typography variant="h5">Your Doctor</Typography>
                <Typography variant="h5">Service</Typography>
              </Stack>
              <Stack spacing={4}>
                <Typography variant="h6">qwert</Typography>
                <Typography variant="h6">0932093019</Typography>
                <Typography variant="h6">Email</Typography>
                <Typography variant="h6">Date/Time</Typography>
                <Typography variant="h6">Your Doctor</Typography>
                <Typography variant="h5">Birr 200</Typography>
              </Stack>
            </Stack>
          </CardContent>
        </Card>
        <Stack
          direction={"row"}
          sx={{ justifyContent: "center" }}
          spacing={5}
          m={4}
        >
          <Link to="/">
            <Button variant="contained">Cancel Schedule</Button>
          </Link>
          <Button variant="contained">Edit Schedule</Button>
          <Link to="/payment">
            <Button variant="contained">Continue</Button>
          </Link>
        </Stack>
      </Stack>
    </Stack>
  );
}

export default Detail;
