import { useState } from "react";
import NewTodo from "./components/NewTodo";
import Todos from "./components/Todos";
import Todo from "./models/Todo";

function App() {
  const [todoes, setTodoes] = useState<Todo[]>([]);

  const addTodoHandler = (text: string) => {
    setTodoes((prevTodoes: Todo[]) => [...prevTodoes, new Todo(text)]);
  };

  return (
    <div>
      <NewTodo onAddTodo={addTodoHandler} />
      <Todos items={todoes} />
    </div>
  );
}

export default App;
