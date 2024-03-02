import { useRef } from "react";

const NewTodo: React.FC<{ onAddTodo: (text: string) => void }> = (props) => {
  const todoInputTextRef = useRef<HTMLInputElement>(null);

  const submitHandler = (event: React.FormEvent) => {
    event.preventDefault();

    const enteredText: string = todoInputTextRef.current!.value;

    if (enteredText.trim().length === 0) {
      return;
    }

    props.onAddTodo(enteredText);
  };

  return (
    <form onSubmit={submitHandler}>
      <label htmlFor="text">Todo text</label>
      <input type="text" id="text" ref={todoInputTextRef} />
      <button>Add Todo</button>
    </form>
  );
};

export default NewTodo;
