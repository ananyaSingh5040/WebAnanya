// console.log("Namste Dunia , it's JS here!");

function add(a, b) {
  return a + b;
}
function sub(a, b) {
  return a - b;
}

//exporting the functions:
module.exports = {
  addNumber: add,
  subNumber: sub,
};

//Another way of exporting:

//exports.add=(a,b)=>a+b;
//exports.sub=(a,b)=>a-b;
