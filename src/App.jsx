import Actions from "./components/Actions";
import Todo from "./components/Todo";
import TodoInput from "./components/Todoinput";
import Actions from "./components/Actions";

const todos = [
  {
    title: "item1 --- 0",
    status:false,
  },
  {
    title: "item2",
    status:true,
  },
  {
    title: "item3",
    status:true,
  },
  {
    title: "item4",
    status:false,
  },
  {
    title: "item5",
    status:false,
  },
];

// todos[0].title
// todos[1].title
// todos[2].title

export function App() {
  return (
    <div className="container">
    <div className="form">
      <TodoInput />
        <br />
        <br />
      <Actions />
    </div>
    <div className="list">
      {todos.map((todo) => {
        return < Todo title={todo.title} status ={todo.status}/>
      })}
      </div>
    </div> 
  );
}