// use cases
// 1.check if user with such name exists
// 2.Adding element to the Array
// 3.Remove duplicate element in the Array
// 4.concatenating the Array


// let us make an array of an object

const users = [
  {
    id: 1,
    name: "ajay",
    isActive: true,
    age: 20
  },
  {
    id: 2,
    name: "akash",
    isActive: true,
    age: 26
  },
  {
    id: 3,
    name: "swaraj",
    isActive: true,
    age: 21
  },
  {
    id: 4,
    name: "zoro",
    isActive: false,  // the meaning of this line is that users is not active 
    age: 33
  },

];

// 1. check if user with such name exists

// level 0 - solution

// arrow  function is used

// const isNameExist = (name, users) =>{
//   let exist = false;
//   for(let i = 0; i < users.length; i++)
//   {
//     if(users[i].name === name)
//     {
//       exist = true;
//     }
//   }
//   return exist;
// }



// level 1 - solution
// const isNameExist = (name,users) =>{
//   const user = users.find((user)=> user.name ===  name);
//   return Boolean(users);
// }

// level 2 - solution

// in JavaScript, when an arrow function has only one expression, you can omit the curly braces {} and the return keyword. This is a shorthand syntax for concise functions.

// const isNameExist = (name,users) =>{
//   const index = users.findIndex((user)=> user.name ===  name);
//   return index >= 0;
// }


// level 3 - solution

// some will return boolean value
const isNameExist = (name,users) =>{
  const user = users.some((user)=> user.name ===  name);
  return user;
}


// 2. Adding element to the array

// spread operator is used for array
// spread operator does not change the original array
// push change the original array so use spread

// const arr = [1,2];
// const append = (arr,ele) =>{
//   return[...arr, ele];

// }
// console.log(append(arr,3));
// console.log(arr);


// 3.Remove Duplicate Element in the array

//The Set object is a built-in Javascript data structure that store unique values of type
//  The spread operator is used to expand the array into individual arguments
// The includes method is used to check if it already exists in the uniqueElements

// level 0
// const arr = [1, 2, 3, 4, 4, 5];

// function uniqueArray() {
//   const uniqueElements = [];

//   arr.forEach((ele) => {
//     if (!uniqueElements.includes(ele)) {
//       uniqueElements.push(ele);
//     }
//   });

//   return uniqueElements;
// }

// const result = uniqueArray();
// console.log(result); // [1, 2, 3, 4, 5]

// level 1
// const arr = [1, 2, 3, 4, 4, 5];

// function uniqueArray(arr) {
//   return [...new Set(arr)];
// }

// console.log(uniqueArray(arr));

// level 2

// The reduce() method is an iterative method
// reduce take two arguments one is callback and other is initialvalue
// const arr = [1, 2, 3, 4, 4, 5];

// const uniqueArray = (arr) => {
//   return arr.reduce((acc, ele) => {
//     return acc.includes(ele) ? acc : [...acc, ele];
//   }, []);
// };

// console.log(uniqueArray(arr));

// Concatenating the array

const mergeArray = (arr1, arr2)=>{

  // Method 1

  return arr1.concat(...arr2);
  


  // Method 2
  // when you dont want to modify the original array use this
  // return[...arr1, ...arr2]

  // Method 3
  // push is used when you want to modify the original array
  // arr1.push(...arr2)
  // return arr1
}

const arr1 = [1];
const arr2 = [2,3];
const result = mergeArray(arr1,arr2);
console.log(result,arr1,arr2);













