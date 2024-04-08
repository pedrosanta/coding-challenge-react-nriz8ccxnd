import { useContext } from "react";

import {
  Stack,
  Typography
} from "@mui/material";

import TasksContext from "../contexts/TasksContext";

import TaskCard from "./TaskCard";

function TasksList() {

  const { tasks } = useContext(TasksContext);

  return (
    <>
      <Typography variant="h6">
        Tasks
      </Typography>
      <Stack
        spacing={2}
        sx={{
          marginTop: 2
        }}
      >
      { tasks.map( (task, index) => <TaskCard key={index} index={index} task={task} />) }
      { tasks.length === 0 &&
        <Typography
          variant="body2"
          sx={{
            color: 'text.secondary'
          }}
        >
          The task list is emtpy. Why not go ahead and add a few tasks?
        </Typography>
      }
      </Stack>
    </>
  )
}

export default TasksList;
