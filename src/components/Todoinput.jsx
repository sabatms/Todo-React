import { useState } from "react";

function onAddItem() {
          console.log("clicked")
}

let my_string = "folan";

function TodoInput() {
const my_string_react = useState("folan");



          return (
          <div>
          <h1> Your todo title : {my_string} </h1>

          <input 
          onKeyUp={(e) =>{
          const char= e.key
          my_string = my_string + char;

          console.log(my_string)
          }} 
          type="text"
          placeholder="Write your todo ..."
          id="title"
          />
          <button onClick={onAddItem} id="save-btn">
           Save
          </button>
          </div>
          );
};

export default TodoInput;