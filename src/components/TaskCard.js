import { useContext } from "react";

import {
  Box,
  Button,
  Card,
  CardContent,
  Typography
} from "@mui/material";

import DeleteIcon from '@mui/icons-material/Delete';

import TasksContext from "../contexts/TasksContext";

function TaskCard({ index, task }) {
  const { deleteTask } = useContext(TasksContext);

  const handleDelete = () => deleteTask(index);

  return (
    <Card
    variant="outlined"
    sx={{
      '&:hover .delete-button': {
        visibility: 'initial'
      }
    }}
  >
    <CardContent
      sx={{
        '&:last-child': {
          paddingBottom: 2
        }
      }}
    >
      <Box sx={{
        display: 'flex',
        alignItems: 'center'
      }}>
        <Typography
          variant="body1"
          sx={{
            fontWeight: 'bold',
            flex: 1
          }}
        >
          {task.name}
        </Typography>
        <Button
          size="small"
          color="error"
          className="delete-button"
          sx={{
            visibility: 'hidden',
            minWidth: 'initial'
          }}
          onClick={handleDelete}
        >
          <DeleteIcon />
        </Button>
      </Box>

      <Typography variant="body2">{task.description}</Typography>
    </CardContent>
  </Card>
  );
}

export default TaskCard;
