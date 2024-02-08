import { useState } from "react";
import Todo from "./components/Todo";
import TodoInput from "./components/Todoinput";
import Actions from "./components/Actions";



export function App() {
  const [list , setList] = useState([]) ;

  console.log("render")

  return (
    <div className="container">
    <div className="form">
      <TodoInput
       handleSubmit = {(value) => {
        setList([
          ...list,
          {
            title : value,
            status :false,
          },
        ]);
      }}
      />
        <br />
        <br />
      <Actions />
    </div>
    <div className="list">
      {list.map((todo) => {
        return < Todo title={todo.title} status ={todo.status}/>
      })}
      </div>
    </div> 
  );
}