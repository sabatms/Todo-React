function folan (a,b,c){
return a + b + c;
}

function Folan (props) {
 return props.a + props.b + props.c ;
}

function Todo (props) {
          const a = props.title
          const b = props.title
          
          return (
          <div className="todo">
          <input type="checkbox" checked={props.status} />
          <span>{props.title}</span>
          <button class="delete">Delete</button>
          </div>
          ); 
}
export default Todo;