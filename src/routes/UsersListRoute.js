import { useMemo } from "react";

import { useLoaderData } from "react-router";

import { Link } from "react-router-dom";

import {
  Grid,
  Pagination,
  PaginationItem,
  Typography
} from "@mui/material";

import UserListCard from "../components/UserListCard";

const LIST_LIMIT = 30;

export async function loader({ request }) {
  const url = new URL(request.url);
  const page = url.searchParams.get('page');

  const skip = page ? (parseInt(page)-1)*LIST_LIMIT : 0;

  const res = await fetch(`https://dummyjson.com/users?limit=${LIST_LIMIT}&skip=${skip}`);

  return await res.json();
}

function UsersListRoute() {
  const { users, total } = useLoaderData();

  const pageCount = useMemo(() => Math.ceil(total / LIST_LIMIT), [ total ]);

  return (
    <>
      <Typography variant="h6" sx={{
        mt: 4,
        mb: 2
      }}>
        Users
      </Typography>

      { (users.length === 0) ? (
        <Typography
          variant="body2"
          sx={{
            color: 'text.secondary'
          }}
        >
          No users found for this query.
        </Typography>
      ) : (
        <Grid
          container
          spacing={2}
        >
          { users.map((user, index) => (
            <Grid
              key={ index }
              item
              xs={12}
              sm={6}
              md={4}
            >
              <UserListCard key={index} user={user} />
            </Grid>
          ))}
        </Grid>
      )}

      <Pagination
        sx={{
          m: 3,
          '& > .MuiPagination-ul': {
            justifyContent: 'center',
          }
        }}
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
