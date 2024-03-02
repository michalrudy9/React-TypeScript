import Todos from "./components/Todos";
import Todo from "./models/Todo";

function App() {
  const todoes: Todo[] = [
    new Todo("Learn React"),
    new Todo("Learn TypeScript"),
  ];
  return (
    <div>
      <Todos items={todoes} />
    </div>
  );
}

export default App;
