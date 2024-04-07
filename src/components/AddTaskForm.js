import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Stack,
  TextField
} from "@mui/material";

function AddTaskForm() {
  return (
    <Card variant="outlined">
      <CardHeader
        title="Add task"
        titleTypographyProps={{
          variant: 'h6'
        }}
        sx = {{
          paddingBottom: 0
        }}
      />
      <CardContent>
        <Stack spacing={3}>
          <TextField
            id="name"
            label="Name"
            required
            sx={{ width: "100%"}}
          />
          <TextField
            id="description"
            label="Description"
            required
            multiline
            sx={{ width: "100%"}}
            rows={4}
          />
        </Stack>
      </CardContent>
      <CardActions sx={{
        padding: 2,
        paddingTop: 1,
        justifyContent: 'right'
      }}>
        <Button>Clear</Button>
        <Button variant="contained">Submit</Button>
      </CardActions>
    </Card>
  )
}

export default AddTaskForm
