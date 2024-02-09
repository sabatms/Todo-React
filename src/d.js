const array1 = [1, 2, 3];
array1.push(4);

console.log("JS:", array1);

const react_array = [1, 2, 3];
const next_array = [...react_array, 4];

// const next_array2 = [];
// react_array.forEach((value) => {
//   next_array2.push(value);
// });

console.log("REACT:", next_array);
