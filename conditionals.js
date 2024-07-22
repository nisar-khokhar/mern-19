// If Else

const a = 2;

if (a == 2) {
  console.log("Entered If");
} else {
  console.log("Else condition worked");
}

// Multiple Ifs

if (a == 3) {
  console.log("A is not equal to 3");
}
if (a == 5) {
  console.log("a is not equal to 5");
}
if (a == 2) {
  console.log("a is equal to 2");
} else {
  console.log("a's value not matched");
}

//if else if
if (a == 1) {
  console.log("a = 1");
} else if (a == 2) {
  console.log("a = 2");
} else if (a == 3) {
  console.log("a = 3");
} else {
  console.log("a's value not found");
}

//Switch statement

const b = 2;
switch (b) {
  case 1:
    console.log("b = 1");
    break;
  case 2:
    console.log("b = 2");
    break;
  case 3:
    console.log("b = 3");
    break;
  default:
    console.log("b's case not found");
}

//ternary operator
const age = 18;
const canDrive = age >= 18 ? "he can drive" : "he cannnot drive";
console.log(canDrive);
