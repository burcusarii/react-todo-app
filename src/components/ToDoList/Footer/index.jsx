import React from "react";
function Footer({ todolist, setToDoList, status, setStatus }) {
  const deleteAll = () => {
    const newList = todolist.filter((todo) => !todo.completed);
    setToDoList(newList);
  };

  const selectedStatus = (statusText) => {
    return `${status === statusText ? "selected" : ""}`;
  };

  const activeList = todolist.filter((todo) => !todo.completed);

  return (
    <footer className="footer">
      <span className="todo-count">
        <strong>{activeList.length} </strong>
        items left
      </span>

      <ul className="filters">
        <li>
          <a
            href="#/"
            className={selectedStatus("all")}
            onClick={() => setStatus("all")}
          >
            All
          </a>
        </li>
        <li>
          <a
            href="#/"
            className={selectedStatus("active")}
            onClick={() => setStatus("active")}
          >
            Active
          </a>
        </li>
        <li>
          <a
            href="#/"
            className={selectedStatus("completed")}
            onClick={() => setStatus("completed")}
          >
            Completed
          </a>
        </li>
      </ul>

      <button className="clear-completed" onClick={deleteAll}>
        Clear completed
      </button>
    </footer>
  );
}

export default Footer;
