import { useMemo } from "react";

import { useLoaderData } from "react-router";

import { Link } from "react-router-dom";

import {
  Avatar,
  Pagination,
  PaginationItem,
  Typography
} from "@mui/material";

const LIST_LIMIT = 10;

export async function loader({ request }) {
  const url = new URL(request.url);
  const page = url.searchParams.get('page');

  const skip = page ? (parseInt(page)-1)*LIST_LIMIT : 0;

  const res = await fetch(`https://dummyjson.com/users?limit=${LIST_LIMIT}&skip=${skip}`);

  return await res.json();
}

function UsersListRoute() {
  const result = useLoaderData();

  const pageCount = useMemo(() => Math.ceil(result.total / LIST_LIMIT), [ result.total ]);

  return (
    <>
      <Typography variant="h6" sx={{
        pt: 4
      }}>
        Users
      </Typography>

      { result.users.map((user, index) => (
        <div key={index}><Avatar src={user.image}/> {user.id} {user.firstName} {user.maidenName} {user.lastName}</div>
      ))}

      <Pagination
        count={pageCount}
        renderItem={(item) => (
          <PaginationItem
            component={Link}
            to={`/users${item.page === 1 ? '' : `?page=${item.page}`}`}
            {...item}
          />
        )}
      />
    </>
  )
}

export default UsersListRoute;
