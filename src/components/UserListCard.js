import { Link as RouterLink } from "react-router-dom";

import {
  Avatar,
  Box,
  Card,
  CardActionArea,
  CardContent,
  Typography
} from "@mui/material";

function UserListCard({ user }) {
  return (
    <Card variant="outlined" sx={{ height: '100%' }}>
      <CardActionArea
        component={RouterLink}
        to={`/users/${user.id}`}
      >
        <CardContent>
          <Box sx={{
            display: 'flex',
            gap: 2
          }}>
            <Avatar src={user.image} />
            <Box sx={{
              flex: 1
            }}>
              <Typography
                variant="h6"
                sx={{
                  mb: 1
                }}
              >
                {user.firstName} {user.maidenName} {user.lastName}
              </Typography>
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
            </Box>
          </Box>

        </CardContent>
      </CardActionArea >
    </Card>
  )
}

export default UserListCard;
