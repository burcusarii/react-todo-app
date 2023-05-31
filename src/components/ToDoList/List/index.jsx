import React, { useState } from "react";

function List({ todolist, setToDoList, filteredList, setFilteredList }) {
  const [allCheck, setAllCheck] = useState(false);

  //görev tamamlama
  const onChangeCompleted = (todoItem) => {
    setToDoList(
      todolist.map((todo) => {
        if (todoItem.id === todo.id) {
          return { ...todo, completed: !todo.completed };
        }
        return todo;
      })
    );
  };

  // hepsini tamamla
  const changeAllCheck = () => {
    const newList = todolist.slice();
    newList.map((item) => {
      return (item.completed = !allCheck);
    });
    setAllCheck(!allCheck);
    setToDoList(newList);
  };

  // görev sil
  const deleteToDo = (index) => {
    const newList = todolist.slice();
    newList.splice(index, 1);
    setToDoList(newList);
  };

  return (
    <section className="main">
      <input
        className="toggle-all"
        type="checkbox"
        onChange={() => changeAllCheck()}
      />
      <label htmlFor="toggle-all" onClick={() => changeAllCheck()}>
        Mark all as complete
      </label>
      <ul className="todo-list">
        {filteredList.map((todoItem, index) => {
          return (
            <li
              key={index}
              className={`${todoItem.completed ? "completed" : ""}`}
            >
              <div className="view">
                <input
                  className="toggle"
                  type="checkbox"
                  checked={todoItem.completed}
                  onChange={() => onChangeCompleted(todoItem)}
                ></input>
                <label>{todoItem.todo}</label>
                <button
                  className="destroy"
                  onClick={() => deleteToDo(index)}
                ></button>
              </div>
            </li>
          );
        })}
      </ul>
    </section>
  );
}

export default List;
