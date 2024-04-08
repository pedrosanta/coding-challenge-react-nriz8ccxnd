import {
  Avatar,
  Card,
  CardContent
} from "@mui/material";

function UserListCard({ user }) {
  return (
    <Card variant="outlined">
      <CardContent>
        <Avatar src={user.image}/> {user.id} {user.firstName} {user.maidenName} {user.lastName}
      </CardContent>
    </Card>
  )
}

export default UserListCard;
