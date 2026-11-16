interface User {
  name: string;
  age: number
}

interface Person {
  name: string;
  age: number
}

const person :Person = {name:"Henry", age:23}
const user:User = person


// const isCompleteUser:User = { name: 'Budi' };

console.log("User:", user)


export {};
