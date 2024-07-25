const arrow = () => {
  return "value";
};
const arrays = [0, "one", true, null, undefined, [1, 2], { age: 20 }, arrow];

console.log(arrays[7]());

console.log(arrays[6].age);

console.log(arrays[5][1]);

//METHODS: push,  pop, shift, unshift, indexOf, includes

console.log("After pushing the new value 8-->", arrays.push(8)); // returns the new length of array and adds value at the edn of array

const poppedVal = arrays.pop();
console.log(poppedVal);
console.log("After popping the value-->", arrays);

const newLength = arrays.unshift("newValue");
console.log(newLength);
console.log("After unshifting the value-->", arrays);

const shiftedVal = arrays.shift();
console.log(shiftedVal);
console.log("After shifting the value-->", arrays);

console.log(arrays.indexOf("one"));

console.log(arrays.includes(arrays[5].includes(2)));

arrays[arrays.includes("one") ? arrays.indexOf("one") : arrays.length] = 1;
console.log("After updating the value 'one' with 1 -->", arrays);
