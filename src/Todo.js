import "./App.css";
import { useState } from "react";

export function Todo() {
  const [myTask, setMyTask] = useState();

  const [allTasks, setAllTasks] = useState([]);

  function collectTheTask(event) {
    //collect the task
    setMyTask(event.target.value);
  }

  function sendTheTask() {
    // send the task present in myTask variable to the allTasks array
    setAllTasks([...allTasks, myTask]);
  }

  return (
    <div className="center">
      <h1>ToDo Application.</h1>
      <input
        className="font"
        type="text"
        placeholder="Enter the Task"
        onChange={collectTheTask}
      />
      <button onClick={sendTheTask}>Add Task</button>
      {allTasks.map(function (i) {
        return <li>{i}</li>;
      })}
    </div>
  );
}
