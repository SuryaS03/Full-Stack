const element=document.createElement("input");
document.body.appendChild(element)
// const element2=document.createElement("img");
// element2.src="car.jpg"
// document.body.appendChild(element2)
 document.getElementById("myid").innerHTML="hello";

// const div = document.getElementById("new");
// div.classList.add('class');
// div.innerText = "hello";
// const button =  document.createElement("button");
// document.body.appendChild(button);
const ele=document.getElementsByClassName("helo");
for(let i=0;i<ele.length;i++){
    ele[i].style.border="2px solid green";
}
