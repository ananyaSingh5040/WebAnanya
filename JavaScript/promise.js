// let firstPromise= new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         console.log("I am Cherry");
//     },10000);
//     resolve(100);
//     // reject(new Error("Internal Server Error"));
// })

// let secondPromise = new Promise ((resolve,reject)=>{
//     let success = true;
//     if(success)
//     {
//         resolve("Promise Fulfilled");
//     }
//     else{
//         reject("Promise Rejected");
//     }
// });
// secondPromise.then((message)=>{
//     console.log("Then block ka message: ", message);
// }).catch((error)=>{
//     console.log("Error: ",error);
// });

//Promise Chaining:

let p = new Promise((resolve, reject) => {
  let success = true;
  if (success) {
    resolve(10);
  } else {
    reject("Internal Server Error");
  }
});
p.then((message) => {
  console.log("first msg:" + message);
  return 20;
})
  .then((message) => {
    console.log("second msg: " + message);
    return 30;
  })
  .then((message) => {
    console.log("third msg: " + message);
  })
  .catch((error) => {
    console.error(error);
  })
  .finally((message) => {
    console.log("Main to final hu, chalunga pakka");
  });

//Handling multiple promises:

let promise1 = new Promise((resolve, reject) => {
  setTimeout(resolve, 1000, "first");
});
let promise2 = new Promise((resolve, reject) => {
  setTimeout(resolve, 2000, "second");
});
let promise3 = new Promise((resolve, reject) => {
  setTimeout(reject, 3000, "third");
});
Promise.all([promise1, promise2, promise3])
  .then((message) => {
    console.log(message);
  })
  .catch((error) => {
    console.log("Error:", error);
  });
