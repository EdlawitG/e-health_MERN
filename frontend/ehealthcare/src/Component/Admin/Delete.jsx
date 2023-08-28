import { Typography, Stack, Button } from "@mui/material";
import React from "react";

function Delete(close) {
  return (
    <Stack alignItems={"center"} justifyContent={"center"}spacing={5} m={5}>
      <Typography variant="h5">Are you sure you want to Delete?</Typography>
      <Stack direction={"row"} spacing={10}>
        <Button variant="contained" sx={{fontSize:'20px'}} >Delete</Button>
        <Button variant="contained" sx={{ background:'#FBF8F0',color:'#000000',fontSize:'20px'}} onClick={close}>Cancel</Button>
      </Stack>
    </Stack>
  );
}

export default Delete;
