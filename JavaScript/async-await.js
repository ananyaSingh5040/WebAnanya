// async function promises(){
//     setTimeout(()=>{
//         console.log("Hello ji");
//     },3000);
// }
// let b= promises();
// console.log(b); async fucnction returns promises.
async function getData(){
    let response = await fetch('https://jsonplaceholder.typicode.com/todos/1'); //await se synchronously behave karega that is jab tak data nai aa jata tab tak ruka rahega.
    let data= await response.json(); //parsing of data.
    console.log(data);
}
getData();
