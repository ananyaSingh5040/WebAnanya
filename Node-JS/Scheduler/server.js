const express = require("express");
const app = express();
const mongoose = require("mongoose"); // Used for connection with mongoDb and much more
const fs = require("fs");
// require("./schedular1");
const users = require("./data/fakeData.json");
const port = 8000;
const userRouter = require("./routes/user");

//Connection - promise return karta i.e then.
mongoose.connect("mongodb://127.0.0.1:27017/practice-app-1")
.then(()=>console.log("MongoDB connected!"))
.catch((err)=>{console.log("Error in connecting DB: ",err)});



//MIDDLEWARE - kind of plugin, app.use se start hote hai(zaroori nai) should have next tho.

app.use(express.urlencoded({ extended: false }));

app.use((req, res, next) => {
  console.log("Hello from middleware 1");
  next();
});
app.use((req,res,next)=>{
    fs.appendFile("./data/log.txt",`\n ${Date.now()} ${req.method} ${req.path} ${req.ip}`,(err,data)=>{})
    next();
})
//Routes:
// Jab bhi users pe request aayegi, its gonna add this to the routes
app.use("/users",userRouter);
app.listen(port, () => {
  console.log("Sever running on port: ", port);
});
