// type conversion and coercion
const a = "123";
const b = 321;

//coercion
console.log(a + b);
console.log(b - a);

//type conversion
const c = parseInt(a);
console.log(a + b, typeof c);

const d = "1";
const e = 1;
console.log(d == e); //checks just value
console.log(d === e); // checks type and value

//short circuiting
if (true || (false && false && false))
  console.log("short circuting happens as one true and OR operator is present");
