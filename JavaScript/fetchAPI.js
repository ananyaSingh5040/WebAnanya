// let p = fetch("https://jsonplaceholder.typicode.com/todos/1")
// .then((response)=>
// {
//     //first block of then:
//     //we check the status and ok properties:
//     console.log(response.status);
//     console.log(response.ok);
//     return response.json();

// }).then((value)=>{
//     //once everything is working fine: toh print
//     console.log(value);
// })


//POST method:

const createTODO = async (todo) => {
  let options = {
    method: "POST",
    headers: { "Content-type": "application/json" },
    body: JSON.stringify(todo),
  };
  let prom = await fetch("https://jsonplaceholder.typicode.com/todos", options);
  let data = await prom.json();
  return data;
};

const getTODO = async(id)=>{
    let prom= await fetch("https://jsonplaceholder.typicode.com/todos/" + id);
    let res= await prom.json();
    return res;
}

const mainFunc =async () => {
  let todo = {
    title: "Cherry",
    body: "bakes",
    userId: 110,
  };
  let todor= await createTODO(todo);
  console.log(todor);
  console.log(await getTODO(1));
  
};

mainFunc();