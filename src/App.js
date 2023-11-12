import Actions from "./components/Actions";
import Todo from "./components/Todo";
import TodoInput from "./components/Todoinput";
import Actions from "./components/Actions";

const todos = [
  {
    title: "item1",
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
      <Todo title ={todos[0].title} status ={todos[0].status} />
      <Todo title ={todos[1].title} status ={todos[1].status}/>
      <Todo title ={todos[2].title} status ={todos[2].status}/>
      </div>
    </div> 
  );
}