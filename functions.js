//function declaration

function evenOdd(P1, P2) {
  console.log(`P1 = ${P1}\nP2 = ${P2}`);
}

evenOdd(2, 3);

//variable **ref** has a reference to a function evenOdd
//ref is not itself a function
//this concept is similar to function expression
const ref = evenOdd;
ref(1, 2);

//function expression
//**even** (varaiable) has a function reference

const even = function (P1) {
  if (P1 % 2 == 0) console.log("even");
  else console.log("odd");
};

even(2);

//event handlers[onClick, onSubmit, onHover etc.] accept function reference
//or callback functions(arrow functions)
//callback functions = called on some event

//arrow functions & anonymous functions
const arrowFunc = (P1 = 7, P2 = 8) => {
  console.log(`P1 = ${P1}\nP2 = ${P2}`);
  P1 % 2 == 0 ? console.log("P1 is even") : console.log("P1 is odd");
  P2 % 2 == 0 ? console.log("P2 is even") : console.log("P2 is odd");
};

arrowFunc(2);

//IIFE (Immediately Invoked Function Expression)
((P1, P2) => {
  console.log(`IIFE\nP1 = ${P1}\nP2 = ${P2}`);
})(1, 2);
//use case
const arrowFunc1 = (
  P1 = 7,
  P2 = ((params) => {
    console.log(`\n\n\n\nParams = ${params}`);
    return 2;
  })("IIFEPARAM")
) => {
  //   console.log(`P1 = ${P1}\nP2 = ${P2}`);
  P1 % 2 == 0 ? console.log("P1 is even") : console.log("P1 is odd");
  P2 % 2 == 0 ? console.log("P2 is even") : console.log("P2 is odd");
};

arrowFunc1();

function name1(P1) {
  P1 = [4, 5];
  console.log(P1);
  //   return P1;
}
console.log("\n\n\n\n\n\n\n");
const a = [1, 2];
name1(a);
console.log(a, "\n\n\n\n\n");

// to change value in JS
//pass by reference thing

const check = (param, updateArray) => {
  console.log("param->", param);
  const P1 = [4, 5];
  updateArray(P1);
};

const main = () => {
  let arg = [1, 2];
  const updateArray = (newValue) => {
    arg = newValue;
  };
  check(arg, updateArray);
  console.log(arg);
};

main();
