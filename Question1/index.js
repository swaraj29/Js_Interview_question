// useCases
// 1. write code to get array of namesfrom given array of users
// 2. Get back only active users
// 3. sort users by age descending




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
    isActive: false,  // the meaning of this lineis that users is not active 
    age: 33
  },

];

// sort in descending order

users.sort((user1, user2)=> user1.age < user2.age ? 1 : -1);
console.log(users);


// solution 1 - level 1

const names = [];
for(i = 0; i < users.length; i++)
{
  if(users[i].isActive)
  {
    names.push(users[i].name)
  }

}
console.log(names);


// solution 2 - level 2
// optimized approach
// for each does not return anything
// for each does not have indexing

users.forEach((user)=>{
  if(user.isActive)
  {
    names.push(user.name);
  }

})
console.log(names);

// The map() method returns a new array whereas forEach()  doesnot return new array
// The forEach() method is similar to the for loop but it does not have a return value
// The map() method is similar to the forEach() method, but it returns a new array

// solution 3 - level 3

// filter only give  true value

// const names1 = users.filter((user) => user.isActive).map((user) => user.name);

//  This is method chaining
const names1 = users
  .filter((user) => user.isActive)
  .sort((user1, user2) => user1.age < user2.age ? 1 : -1)
  .map((user) => user.name);


  console.log("names1", names1)

  // sort function map ke upar lagtaa hai

  // sort kartaa hai pehle string me convert karke on the basis of utf 16


  // Learn about map , filter, sort , forEach, loop, isactive, array of objects


