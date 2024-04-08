import {
  useEffect,
  useState
} from "react";

import TasksContext from "./TasksContext";

function getInitialState() {
  const storedState = localStorage.getItem('tasksState');

  return storedState ? JSON.parse(storedState) : [];
}

function TasksProvider({ children }) {

  const [tasks, setTasks] = useState(getInitialState());

  useEffect(() => {
    localStorage.setItem('tasksState', JSON.stringify(tasks));
  }, [tasks]);

  const addTask = (task) => {
    setTasks([...tasks, task]);
  };

  const deleteTask = (index) => {
    const newTasks = tasks.slice();
    newTasks.splice(index, 1);
    setTasks(newTasks);
  }

  return (
    <TasksContext.Provider value={{ tasks, addTask, deleteTask }}>
      {children}
    </TasksContext.Provider>
  )
}

export default TasksProvider;
