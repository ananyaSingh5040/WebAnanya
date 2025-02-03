let arr= [10,20,30,40];
arr.forEach((value,index)=>{
    console.log("Number: ",value," Index: ",index);
})
let length= arr.length;
console.log("Array Length: ",length);

//FOR-IN LOOP:
let obj = {
    name: "Cherry",
    age: 20,
    height: "5ft 5inch",
    greet: function () {
      console.log("hello ji ,kaise ho saare");
    }
  };
  for(let key in obj)
  {
    console.log(key,":",obj[key]);
  }
let str= "cherry"
for(let character of str){
    console.log(character);
}