const fs= require("fs");
const os= require("os");

//Sync..
// fs.writeFileSync("./test.txt", "Hello Dunia");

//Async..
// fs.writeFile("./test.txt","hello Dunia", (err)=>{});

//Sync reading:
// const result= fs.readFileSync("./test.txt","utf-8")
// console.log(result);

//Async reading:
// fs.readFile("./test.txt","utf-8",(err,result)=>{
//     if(err)
//     {
//         console.log("Error: ",err);
//     }
//     else{
//         console.log(result);
//     }
// })

//Appending the file:
// fs.appendFileSync("./test.txt",`Today's log: ${Date.now()}\n`);

//copy a file:
// fs.copyFileSync("./test.txt","./copy.txt")

//delete a file:
// fs.unlinkSync("./copy.txt");

//status of a file:
// console.log(fs.statSync("./test.txt"));


//YOU CAN CREATE, DELETE, APPEND, LINK, COPY ETC ETC A FILE/ FOLDER

//cpus:
console.log(os.cpus().length);