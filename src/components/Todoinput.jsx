function onAddItem(){
          console.log("clicked")
}

function onType(e){
          const char = e.key
          console.log(char )
}


function TodoInput(){
          return(
          <div>
          <input   onKeyUp={onType} type="text" placeholder="Write your Todo.." id="title" />
          <button  onClick={onAddItem} id="save-btn">Save</button>
          </div>
          );
}
export default TodoInput;