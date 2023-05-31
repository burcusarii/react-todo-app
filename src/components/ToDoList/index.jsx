import React, { useState, useEffect } from "react";
import NewToDo from "./NewToDo";
import List from "./List";
import Footer from "./Footer";
import "./style.css";
function ToDoList() {
  const [status, setStatus] = useState("all");
  const [todolist, setToDoList] = useState(
    JSON.parse(localStorage.getItem("todolist"))
  );
  const [filteredList, setFilteredList] = useState([]);

  const filtered = () => {
    if (status === "completed") {
      setFilteredList(todolist.filter((todo) => todo.completed === true));
    } else if (status === "active") {
      setFilteredList(todolist.filter((todo) => todo.completed === false));
    } else {
      setFilteredList(todolist);
    }
  };

  useEffect(() => {
    filtered();
    saveLocalTodos();
  }, [todolist, status]);

  const saveLocalTodos = () => {
    localStorage.setItem("todolist", JSON.stringify(todolist));
  };

  return (
    <div className="todoapp">
      <NewToDo todolist={todolist} setToDoList={setToDoList}></NewToDo>
      <List
        todolist={todolist}
        setToDoList={setToDoList}
        filteredList={filteredList}
        setFilteredList={setFilteredList}
      ></List>
      <Footer
        todolist={todolist}
        setToDoList={setToDoList}
        status={status}
        setStatus={setStatus}
      ></Footer>
    </div>
  );
}

export default ToDoList;
