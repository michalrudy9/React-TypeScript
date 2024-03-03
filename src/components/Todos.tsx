import React, { useContext } from "react";
import Todo from "../models/Todo";
import TodoItem from "./TodoItem";
import classes from "./Todos.module.css";
import { TodoContext } from "../store/todo-context";

const Todos: React.FC = () => {
  const todosCtx = useContext(TodoContext);
  return (
    <ul className={classes.todos}>
      {todosCtx.items.map((item: Todo) => (
        <TodoItem
          key={item.id}
          text={item.text}
          onRemoveTodo={todosCtx.removeTodo.bind(null, item.id)}
        />
      ))}
    </ul>
  );
};

export default Todos;
