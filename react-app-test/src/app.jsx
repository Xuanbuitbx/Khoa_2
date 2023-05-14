import "./index.css";
import NewTodoForm from "./NewTodoForm";
import ToDoList from "./ToDoList";

export default function SimpleToDo() {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="flex flex-col justify-center w-96 h-auto rounded-md bg-slate-500 space-y-4 p-5 shadow-2xl ">
        <h1 className="text-center font-bold text-2xl font">Simple Todo App</h1>
        <NewTodoForm />
        <ToDoList />
      </div>
    </div>
  );
}
