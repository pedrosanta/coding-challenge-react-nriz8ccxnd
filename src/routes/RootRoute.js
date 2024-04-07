import { Outlet } from "react-router-dom";

import {
  Container,
  Toolbar
} from "@mui/material";

import NavBar from "../components/NavBar";

function RootRoute() {
  return (
    <>
      <NavBar />
      <Toolbar />
      <Container>
        <Outlet />
      </Container>
    </>
  );
}

export default RootRoute;
