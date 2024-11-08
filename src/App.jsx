import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { TaskProvider } from "./Component/TaskContext";
import AddTask from "./Component/AddTask";
import TaskList from "./Component/TaskList";

function App() {
  return (
    <TaskProvider>
      <div style={{ padding: "20px" }}>
        <AddTask />
        <TaskList />
      </div>
    </TaskProvider>
  );
}

export default App;
