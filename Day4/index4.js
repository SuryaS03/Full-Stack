const person={name:"gokul",age:45,gender:"Male",Education:"12th STD"};
/*
const person1={};
const person2=new Object;
const person3=Object.create(null);
console.log(person);
console.log(person.name);
console.log("-----------Printing the Keys-------------")
console.log(Object.keys(person));
console.log("\n")
console.log("-----------Printing the values----------")
console.log(Object.values(person));
console.log("\n")
console.log("-----------Printing the Entries----------")
console.log(Object.entries(person));
console.log("\n")


console.log("-----------Printing the Entries using the map----------")
const result=Object.entries(person).map(([key,value])=>`${key}:${value}`)
console.log(result)

console.log("-----------Printing the Entries using the map----------")
const res=Object.entries(person).map(([i,j,k])=>`${i}:${j}:${k}`)
console.log(res)
console.log("--------------------------------------------------------")
console.log("/n")
*/

//SPREAD syntax: ...
const person5={...person,newage:1000,name1:"vasanth"};//add one object into a another object
console.log(person5);

//REST
const{age,...rest}=person5;//parting the object person5,here rest is also a object
console.log("------------------checking--------------")
console.log(rest);
console.log(typeof(rest));//object
console.log(typeof(age));//number
console.log(person5);  

console.log("\n")
console.log("---------------------------------------------------")  
const newperson={"name":"surya","age":"45"}
console.log(newperson);
console.log("---------------Stringify------------------------------------")
console.log("\n")
console.log("------------------normal to json format ---------------------------------")
const jsonString=JSON.stringify(newperson)
console.log(jsonString)

console.log("---------------json to normal format------------------------------------")
const ojs=JSON.parse(jsonString)
console.log(ojs)

