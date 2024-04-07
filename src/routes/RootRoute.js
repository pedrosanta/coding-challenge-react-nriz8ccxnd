import {
  Link,
  Outlet
} from "react-router-dom";

function RootRoute() {
  return (
    <>
      <nav>
        <ul>
          <li><Link to={''}>Tasks</Link></li>
          <li><Link to={'users'}>Users</Link></li>
        </ul>
      </nav>
      <Outlet />
    </>
  );
}

export default RootRoute;
