const array =[10 ,20 ,30];

const new_array = [];

for(let i=0 ; i<array.length; i++){
          const value = array[i];
          new_array.push(value * 2);
}

array.forEach((value) =>{
    new_array.push(value *2)
}); 

console.log(array);
console.log(new_array)