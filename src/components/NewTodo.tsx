import { useContext, useRef } from "react";
import classes from "./NewTodo.module.css";
import { TodoContext } from "../store/todo-context";

const NewTodo: React.FC = () => {
  const todoInputTextRef = useRef<HTMLInputElement>(null);
  const todosCtx = useContext(TodoContext);

  const submitHandler = (event: React.FormEvent) => {
    event.preventDefault();

    const enteredText: string = todoInputTextRef.current!.value;

    if (enteredText.trim().length === 0) {
      return;
    }

    todosCtx.addTodo(enteredText);
  };

  return (
    <form onSubmit={submitHandler} className={classes.form}>
      <label htmlFor="text">Todo text</label>
      <input type="text" id="text" ref={todoInputTextRef} />
      <button>Add Todo</button>
    </form>
  );
};

export default NewTodo;
