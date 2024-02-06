function render (){
  console.log("renderd")
}


function useState() {
  let state = {
  value : "folan" ,
  };
  const updateValue = (next_value) => {
    state.value = next_value;
    render()
  };

  return [state, updateValue];
}

const my_folan = useState();
const folan = my_folan[0];
const updateFolan = my_folan[1];

console.log(folan.value);
updateFolan("bisar");

console.log(folan.value);