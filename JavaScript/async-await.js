// async function promises(){
//     setTimeout(()=>{
//         console.log("Hello ji");
//     },3000);
// }
// let b= promises();
// console.log(b); async fucnction returns promises.
async function getData(){
    let response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
    let data= await response.json(); //parsing of data.
    console.log(data);
}
getData();
