import { useState } from "react";

import {
  Alert,
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Snackbar,
  Stack
} from "@mui/material";

import {
  FormContainer,
  TextFieldElement,
  useForm
} from "react-hook-form-mui";

function AddTaskForm() {

  const [sucessOpen, setSucessOpen] = useState(false);
  const [errorOpen, setErrorOpen] = useState(false);

  const formContext = useForm({
    defaultValues: {
      name: '',
      description: ''
    }
  });

  const handleSucess = (data) => {
    console.log(data);
    setSucessOpen(true);
    formContext.reset();
  };

  const handleError = (errors) => {
    setErrorOpen(true);
  };

  return (
    <>
      <FormContainer
        formContext={formContext}
        onSuccess={handleSucess}
        onError={handleError}
      >
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
            <Stack spacing={2}>
              <TextFieldElement
                name="name"
                label="Name"
                required
              />
              <TextFieldElement
                name="description"
                label="Description"
                required
                multiline
                rows={4}
              />
            </Stack>
          </CardContent>
          <CardActions sx={{
            padding: 2,
            paddingTop: 1,
            justifyContent: 'right'
          }}>
            <Button onClick={formContext.reset}>Clear</Button>
            <Button type="submit" variant="contained">Submit</Button>
          </CardActions>
        </Card>
      </FormContainer>
      <Snackbar open={sucessOpen} autoHideDuration={2000} onClose={() => setSucessOpen(false)}>
        <Alert
          onClose={() => setSucessOpen(false)}
          severity="success"
          sx={{ width: '100%' }}
        >
          Task added sucessfully.
        </Alert>
      </Snackbar>
      <Snackbar open={errorOpen} autoHideDuration={4000} onClose={() => setErrorOpen(false)}>
        <Alert
          onClose={() => setErrorOpen(false)}
          severity="error"
          sx={{ width: '100%' }}
        >
          Oops, something went wrong. Please check if these were the values you wanted to add.
        </Alert>
      </Snackbar>
    </>
  )
}

export default AddTaskForm
