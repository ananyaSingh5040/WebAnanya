// //Map, Filter And Reduce Functions:
// let arr= [10,20,30,48,58,90,67];
// //What map function does is : takes every element and passes it to the function created and returns a new array with the updated values.
// let newArr= arr.map((element)=>{
//     return element*element;
// })
// console.log(newArr);

// //Filter function: filters out the array depending on what you've put in function block.

// let evenArray= arr.filter((num)=>{
//     return num%2===0;
// })
// console.log(evenArray);

// let a= [10,20, 'cherry', true, 'namak'];
// let ans= a.filter((element)=>{
//     if(typeof(element)=='string')
//         return true;
//     else
//     return false;
// })
// console.log(ans);

// //reduce function: reduces the output and converts into a single element

// let abr= [10,20,30,40];
// let ans1= abr.reduce((acc,curr)=>{
//     return acc+curr;

// },0)
// console.log(ans1);
//accumalator =0 se initalize kardiya (axting as a count variable)
//current is pointing to the first index of the array.
//0+10 then acc= 10 fhir 10+20 fhir acc = 30 then 30+30 then acc= 60 fhir 60+40 returns 100;


//Sort:
let arr= [9,176,7,84,3];
arr.sort( (a, b) =>  a-b );
// arr.sort();
console.log(arr);
console.log(arr.indexOf(84));

// here a is the first value and b is the second value.

// if a-b = +ve then it means a > b then we need to exchange the position of a with b so the smaller number comes before larger.
// if a - b = -ve then a < b then it is in correct order. Move to other numbers for check.
// if a - b = 0 then a == b then it is also in correct order.

//  Now, we need to sort the arr in descending order.
// there are two ways:
// 1.  arr.sort( (a, b) => return a - b ).reverse();     // by reversing the sorted array.

// 2. arr.sort( (a, b) => return  b-a );     // by reversing the logic    // here also a is first number and b is second number

// if b-a = +ve then it means b > a then we need to exchange the position of  b with a so the larger comes before smaller.
// if b-a = -ve then it means b < a then it is in correct position.
// if b-a = 0 then it means b == a  then it is also in correct order.

