const person={name:"gokul",age:45};
const person1={};
const person2=new Object;
const person3=Object.create(null);
console.log(person);
console.log(person.name);
console.log(Object.keys(person));
console.log(Object.values(person));
console.log(Object.entries(person));