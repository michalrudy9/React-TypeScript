import React, { useState } from "react";
import Todo from "../models/Todo";

type TodosContextObj = {
  items: Todo[];
  addTodo: (text: string) => void;
  removeTodo: (id: string) => void;
};

export const TodoContext = React.createContext<TodosContextObj>({
  items: [],
  addTodo: () => {},
  removeTodo: (id: string) => {},
});

const TodoContextProvider: React.FC<{}> = (props) => {
  const [todoes, setTodoes] = useState<Todo[]>([]);

  const addTodoHandler = (text: string) => {
    setTodoes((prevTodoes: Todo[]) => [...prevTodoes, new Todo(text)]);
  };

  const removeTodoHandler = (id: string) => {
    setTodoes((prevTodos: Todo[]) => {
      return prevTodos.filter((todo: Todo) => todo.id !== id);
    });
  };

  const contextValue: TodosContextObj = {
    items: todoes,
    addTodo: addTodoHandler,
    removeTodo: removeTodoHandler,
  };

  return (
    <TodoContext.Provider value={contextValue}>
      {props.children}
    </TodoContext.Provider>
  );
};

export default TodoContextProvider;
