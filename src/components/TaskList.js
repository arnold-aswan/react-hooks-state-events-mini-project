import React from "react";
import Task from "./Task";

function TaskList({ tasks, setTasks }) {
  const handleDeleteTask = (deleteTask) => {
    const updatedTasks = tasks.filter((task) => deleteTask !== task.text);
    setTasks(updatedTasks);
  };

  const taskLists = tasks.map((task, index) => {
    return (
      <Task
        key={index}
        text={task.text}
        category={task.category}
        onDelete={() => handleDeleteTask(task.text)}
      />
    );
  });

  return <div className="tasks">{taskLists}</div>;
}

export default TaskList;
