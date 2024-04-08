import {
  Avatar,
  Box,
  Button,
  Card,
  CardContent,
  Grid,
  Typography
} from "@mui/material";

import ArrowBackIcon from '@mui/icons-material/ArrowBack';

import {
  useLoaderData,
  useNavigate
} from "react-router";

export async function loader({ params }) {
  const res = await fetch(`https://dummyjson.com/users/${params.id}`);

  return await res.json();
}

function UserRoute() {
  const navigate = useNavigate();

  const user = useLoaderData();

  return (
    <Box sx={{
      pt: 1,
      mb: 4
    }}>
      <Box>
        <Button
          startIcon={<ArrowBackIcon />}
          onClick={() => navigate(-1)}
        >
          Back
        </Button>
      </Box>
      <Grid container>
        <Grid item xs={12} sm={4}>
          <Typography
            variant="h6"
            sx={{ mb: 2 }}
          >
            {user.firstName} {user.maidenName} {user.lastName}
          </Typography>
          <Avatar
            src={user.image}
            sx={{
              width: "40%",
              height: "auto",
              mb: 3
            }}
          />
          <Typography
            variant="body2"
            sx={{
              color: 'text.secondary'
            }}
          >
            @{user.username}
          </Typography>
          <Typography
            variant="body2"
            sx={{
              fontWeight: '500'
            }}
          >
            {user.email}
          </Typography>

          <Typography variant="body2" sx={{ mt: 2 }}>{user.company.title}</Typography>
          <Typography>{user.company.name}</Typography>
        </Grid>
        <Grid item xs={12} sm={8} sx={{ mt: { xs: 2, sm: 0 } }}>
          <Typography
            variant="h6"
            sx={{ mb: 2 }}
          >
            Raw Data
          </Typography>
          <Card variant="outlined" sx={{ overflow: 'auto '}}>
            <CardContent sx={{
              pt: 0,
              '&:last-child': {
                pb: 0
              }
            }}>
              <pre>{JSON.stringify(user, null, 2)}</pre>
              </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  )
}

export default UserRoute;
