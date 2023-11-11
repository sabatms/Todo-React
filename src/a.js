function sum(a,b){
          return a + b;
}

sum(10 , 20);

function sum2 (props) {
          const a = props.num1;
          const b = props.num2;
          return a + b
}

const values ={
          num1:10,
          num2:20,
};
sum2(values);