import { useState } from "react";

function onAddItem() {
          console.log("clicked")
}

//let my_string = "folan";

function TodoInput(props) {
const [my_string , update_string] = useState("");
          return (
          <div>
          <h1> Your todo title : {my_string} </h1>

          <input 
          onKeyUp={(e) =>{
          const char= e.key
         // my_string = my_string + char;

         update_string(my_string + char)
          }} 
          type="text"
          placeholder="Write your todo ..."
          id="title"
          />
          <button onClick={() =>{

             props.handleSubmit(my_string)
          }} id="save-btn">
           Save
          </button>
          </div>
          );
};

export default TodoInput;