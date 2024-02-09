import { useState } from "react";

function onAddItem() {
          console.log("clicked")
}

function TodoInput(props) {
const [my_string , update_string] = useState("");
          return (
          <div>
          <h1> Your todo title : {my_string} </h1>

          <input 
          onKeyUp={(e) =>{
          const exclude = ["Escape","Shift", "7"];
          if(e.key === "Backspace"){
            return;
          }else if (exclude.includes(e.key)){ 
            return;
          }
          const char= e.key
          const nextString = my_string + char ;
          console.log(char , nextString);
          update_string(nextString);
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