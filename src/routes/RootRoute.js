import {
  NavLink,
  Outlet
} from "react-router-dom";

import {
  AppBar,
  Container,
  Toolbar,
  Typography
} from "@mui/material";

import { styled } from "@mui/material/styles";

const NavItem = styled(Typography)(({theme}) => ({
  color: "#fff",
  textDecoration: 'none',
  marginRight: theme.spacing(3),
  'a.active > &': {
    textDecoration: 'underline'
  }
}));

function RootRoute() {
  return (
    <>
      <AppBar>
        <Container>
          <Toolbar disableGutters>
            <Typography
              variant="h6"
              component="div"
              sx={{
                marginRight: 4
              }}
            >
              React Coding Challenge
            </Typography>

            <NavLink to={""} style={{ textDecoration: 'none'}}>
              <NavItem>Tasks</NavItem>
            </NavLink>

            <NavLink to={"users"} style={{ textDecoration: 'none'}}>
              <NavItem>Users</NavItem>
            </NavLink>
          </Toolbar>
        </Container>
      </AppBar>
      <Toolbar />
      <Container>
        <Outlet />
      </Container>
    </>
  );
}

export default RootRoute;
