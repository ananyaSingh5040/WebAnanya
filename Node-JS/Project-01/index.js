//Import Statements:
const express= require('express');
const users= require('./MOCK_DATA.json');

//APP:
const app= express();
const PORT= 8000;

//Routes:
app.get('/users/:id',(req,res)=>{
    return res.send(users);
})

//SERVER:
app.listen(PORT, ()=>{console.log(`Server started on Port: ${PORT}`)});