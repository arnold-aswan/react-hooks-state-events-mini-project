import React, { useState } from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";
// console.log("Here's the data you're working with");
// console.log({ CATEGORIES, TASKS });

function App() {
  const [tasks, setTasks] = useState(TASKS);
  const [categories, setCategories] = useState(CATEGORIES);

  const addNewTask = (newtasks) => {
    setTasks([...tasks, newtasks]);
  };

  const filterCategory = (filterTasks) => {
    // console.log(filterTasks);
    if (filterTasks === "All") {
      setTasks(tasks);
      // console.log(tasks);
    } else {
      console.log(tasks);
      const filteredTasks = tasks.filter(
        (task) => task.category === filterTasks
      );
      setTasks(filteredTasks);
      console.log(tasks);
    }
  };

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter categories={categories} onFilter={filterCategory} />
      <NewTaskForm categories={categories} onTaskFormSubmit={addNewTask} />
      <TaskList tasks={tasks} setTasks={setTasks} />
    </div>
  );
}

export default App;
