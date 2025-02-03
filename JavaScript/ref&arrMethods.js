//Reference datatypes:
//Functions, Objects, Arrays- allocated memory is in heap and stack memory se reference milta.
let obj = {
  name: "Cherry",
  age: 20,
  height: "5ft 5inch",
  greet: function () {
    console.log("hello ji ,kaise ho saare");
  }
};
// console.log(obj);
// console.log(obj.height);
obj.greet();

//Creation of Arrays:
let arr = [1, 2, 3, 4, 5];

//Array Constructor:
let brr = new Array("cherry", 1, true);

//Array methods:
brr.push("hello"); //adds in rightmost of array.
brr.pop();
brr.shift(); //leftmost part of array would be removed.
brr.unshift("cherry"); //can add any element in leftmost part
brr.push(40);
brr.push(7);
brr.push(80);
console.log(brr.slice(2, 4)); //last given index ko exculde kardega
//SPLICE CAN  BE USED FOR REMOVING AND INSERTING:
// brr.splice(1,2,'Love Babbar'); //1st Index se leke do elements remove karo and insert the given value.(shallow copy bananta i.e. pointing to the same data)
brr.splice(1, 0, "Hello Jee"); //1st Index se leke 0 elements remove karo and insert the given value.
console.log(brr);



