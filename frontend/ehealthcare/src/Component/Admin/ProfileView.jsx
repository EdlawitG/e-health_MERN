import {useState,useEffect} from "react";
import {Card,Stack,CardContent,Typography,Button} from '@mui/material'
import {Link,useParams} from 'react-router-dom'
import axios from "axios";

function ProfileView() {
  const [data, setData] = useState([{}]);
  const { id } = useParams();
  //   const navigate = useNavigate();
  useEffect(() => {
    getHospital(id);
  }, [id]);

  async function getHospital(id) {
    var response = await axios.get(`http://localhost:5000/api/hospitals/${id}`);
    if (response.status === 200) {
      setData({ ...response.data });
    }
  }

  return (
    <>
      <Stack m={"20px"}>
        {data &&
          data.map((user, index) => (
            <Card sx={{ maxWidth: 345 }} key={index}>
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
                  {user.email}
                </Typography>
                <Typography
                  variant="h5"
                  style={{ color: "#2AA7FF", fontStyle: "italic" }}
                >
                  {user.address}
                </Typography>
                <Typography variant="h5" style={{ color: "#1B3C74" }}>
                  {user.contactNumber}
                </Typography>
                <Stack m={2} direction="row" spacing={3}>
                  <Link to={`/updateprofile/${user.id}`}>
                    <Button variant="contained" color="info">
                      Update
                    </Button>
                  </Link>
                </Stack>
              </CardContent>
            </Card>
          ))}
      </Stack>
    </>
  );
}

export default ProfileView;
