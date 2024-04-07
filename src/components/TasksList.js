import {
  Stack,
  Typography
} from "@mui/material";

import TaskCard from "./TaskCard";

const dummyTasks = [
  { name: "Task 1", description: "Task 1 description." },
  { name: "Task 2", description: "Task 2 description." },
  { name: "Task 3", description: "Task 3 description." }
]

const tasks = dummyTasks;

function TasksList() {
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
      { tasks.map( (task, index) => <TaskCard key={index} task={task} />) }
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
