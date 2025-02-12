let class1= document.querySelector(".box");
console.log(class1.matches("#hello")); //returns true if matches.


let id1= document.getElementById("hello");
console.log(id1.closest('.box')); //returns the closest element having this particular class and returns null if not.

console.log(id1.contains(class1)); //true