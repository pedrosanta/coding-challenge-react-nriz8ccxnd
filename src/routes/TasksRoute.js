import { Grid } from "@mui/material";

import AddTaskForm from "../components/AddTaskForm";
import TasksList from "../components/TasksList";

function TasksRoute() {
    return (
        <Grid
          container
          spacing={5}
          sx={{
            marginTop: 0
          }}
        >
          <Grid item md={6} sm={12} xs={12}><AddTaskForm /></Grid>
          <Grid item md={6} sm={12} xs={12}><TasksList /></Grid>
        </Grid>
    )
}

export default TasksRoute;
