//As we know object hamesha shallow copy banata hai that is refrence se point karta.
//I.e we need to use different methods of cloning to have deep copy.

let src = {
  age: 19,
  name: "Ananya",
  break: true,
};
//SPREAD OPERATOR:
// let dest={...src}; //deep copy alag se block bana raha
// let dest= src; //shallow copy- ref bana leta
//hogyi cloning bhai.
//Changes ka effect dusrso main nai padega.


//Assign method:
// let dest= Object.assign({},src); //empty object aur source pass kiya hai.



//Iteration Method:
let dest={};
for(let key in src)
{
    newKey= key;
    newValue= src[key];

    //insert:
    dest[newKey]= newValue;
}




//Testing before printing:
src.age = 60;
console.log("src: ", src);
console.log("Cloned src: ", dest);



