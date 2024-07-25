const person0 = {
  name: "John",
  age: "25",
  course: "MERN",
  gender: "male",
  address: {
    city: "new york",
  },
  array: [1, 2],
  sayHello: (function () {
    return "hello";
  })(),
};

console.log(person0);

const person1 = {
  name: "Nisar",
  age: 20,
};

const person2 = {
  name: "Hassan",
  age: 20,
};

const person3 = {
  name: "Faizan",
  age: 20,
};

const person4 = {
  name: "John",
  age: 20,
};

const followers = [person1, person2, person3, person4];
console.log(followers);

console.log(followers[1]);

console.log(Object.keys(person0));
console.log(Object.values(person0));
console.log(Object.entries(person1));
