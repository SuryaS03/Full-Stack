// // console.log("hello");
// // const a="hi";
// // {
// //     let a=20;
// //     console.log("inner",a);
// // }
// // console.log("constant variable")
// // console.log("outer",a);
// // console.log(typeof(a),a);
// //  document.getElementById("val").innerHTML="hello";
// // if(a==10)
// //     console.log("true");
// // else
// // console.log("false");


// // --------------------------------------------------------------
// myfunc();
// myfunc2();

// function myfunc(){
//     console.log("this is my function call");

// }
// function myfunc2() {
//     console.log("this is my function call2");

// }

// const myfunc3=()=>{
//     console.log("hello hoe are you");

// }
// myfunc3();
// // -------------------------------------------------------------
// // immediately invoked function (IIF)
// (function(){
//     console.log("hi")
// })()
// //--------------------------------------------------------------

// const outerfunction=()=>{
//     const a="outer func is called";
//     const innerfunction=()=>{
//         console.log("a",a);}
//         return innerfunction;

//     }
//     // const otherfunction=outerfunction();
// console.log(outerfunction);


// /////////////////////////////////////////////////////////////

// Array
console.log("------------------------------------------------------------")
const myArray=[];
const numbers=[1,2,3,4,5];
const color=new Array("green","blue","red");
color.push("orange");//adding  element to last
color.unshift("yellow");//adding elemnt to start
console.log(color[color.length-1])
console.log(color[0])
console.log("******************************************************************")

/////////////////////////for each method
console.log("------------------------------------------------------------")
console.log("for each loop");
console.log("------------------------------------------------------------")
color.forEach(function(cl){
    console.log(cl)})
    console.log("******************************************************************")



    //////////for of loop
    console.log("------------------------------------------------------------")
    console.log("for of loop")
    console.log("------------------------------------------------------------")
    for(const i of color){
        console.log(i);
    }
    console.log("******************************************************************")

    // console.log("for of loop checking")
    // for(const i of color){
    //     console.log(color.pop(i));
    // }
console.log("------------------------------------------------------------")
    ///////////////////////
    
    // console.log("length")
    color.unshift("purple")
    console.log(color[0])
    const result=color.map((i)=>{
        console.log(i);

    })
    console.log("------------------------------------------------------------")
    console.log("******************************************************************")

    console.log("------------------slice-----------------")
    const s=color.slice(1,4);
    console.log(s)
    console.log(color)

    console.log("------------------splice-----------------")


    const t=color.splice(1,3,"rose","pink","grey")
    console.log(color);
    console.log(t)