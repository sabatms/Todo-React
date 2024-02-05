function useState2() {
  const value = "";
  const updateValue = (next_value) => {
    value = next_value;
  };

  return [value, updateValue];
}

const my_folan = useState2();
const folan = my_folan[0];
const updateFolan = my_folan[1];

console.log(folan);

