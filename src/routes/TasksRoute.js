import {
  Grid,
  Typography
} from "@mui/material";

import AddTaskForm from "../components/AddTaskForm";

function TasksRoute() {
    return (
        <Grid
          container
          spacing={5}
          sx={{
            marginTop: 0
          }}
        >
          <Grid item sm={6} xs={12}><AddTaskForm /></Grid>
          <Grid item sm={6} xs={12}>
            <Typography variant="h6">
              Tasks
            </Typography>
          </Grid>
        </Grid>
    )
}

export default TasksRoute;
