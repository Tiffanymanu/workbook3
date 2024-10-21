"use strict"; 
// function test1() { 
// let a = 10; 
// if (a > 5) { 
// a = 7; 
// } 
// console.log("a = " + a); 
// }  
// test1() 


// function test2A() { 
// if (1 == 1) { 
// var a = 5; 
// } 
// console.log("a = " + a); 
// } 
// test2A(); 


// function test2B() { 
//     if (1 == 1) { 
//     let a = 5; 
//     } 
//     console.log("a = " + a); 
//     } 
//     test2B(); 
    

// "use strict"; 
// let a = 4; 
// function test3() { 
//   a = 3; 
//   console.log("a = " + a); 
// } 
 
// test3(); 
// console.log("a = " + a); 


// let a = 4; 
// function test4() { 
//   let a = 7; 
//   console.log("a = " + a); 
// } 
 
// test4(); 
// console.log("a = " + a); 

// function addNumbers(number1, number2) {
//     return number1 + number2;
// } 

// console.log( addNumbers(5, 10));  // This will print 15 


// function getNumGrandKids(name) {  // name is the parameter 
//     let num = 0; 
  
//     if (name == "Dana") { 
//        num = 6; 
//     } 
//     else if (name == "Karla") { 
//        num = 3; 
//     }    
//     else if (name == "Leslye") { 
//        num = 2; 
//     } 
   
//     return num; 
//  } 
  
//  let num = getNumGrandKids("Dana");  // "Dana" is argument 
//  console.log(num); 
  
//  num = getNumGrandKids("Karla"); 
//  console.log(num);  

function convertFtoC (tempInFarenheit){
    let celsius = (tempInFarenheit- 32) * (5/9)
    return celsius 

} 


let currentTemp = 212
let celsiusTemp = convertFtoC(currentTemp) ;
console.log(celsiusTemp)