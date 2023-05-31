import React, { useState } from "react";

function NewToDo({ todolist, setToDoList }) {
  const [newToDo, setNewTodo] = useState({
    todo: "",
    completed: false,
    id: Math.floor(Math.random() * 10000),
  });

  const onChangeInput = (e) => {
    setNewTodo({
      todo: e.target.value,
      completed: false,
      id: Math.floor(Math.random() * 1000),
    });
  };

  const formSubmit = (e) => {
    if (newToDo.todo === "") {
      alert("lütfen bir görev giriniz");
    } else {
      setToDoList([...todolist, newToDo]);
      setNewTodo({ ...newToDo, todo: "" });
    }

    e.preventDefault();
  };

  return (
    <header className="header">
      <h1>todos</h1>
      <form onSubmit={formSubmit}>
        <input
          onChange={onChangeInput}
          className="new-todo"
          placeholder="What needs to be done?"
          autoFocus
          value={newToDo.todo}
        />
      </form>
    </header>
  );
}

export default NewToDo;
