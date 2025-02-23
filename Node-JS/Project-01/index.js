//Import Statements:
const express = require("express");
const users = require("./MOCK_DATA.json");
const fs = require("fs");
const mongoose= require("mongoose");

//APP:
const app = express();
const PORT = 8000;
//Connection:
let a = await mongoose.connect("mongodb://127.0.0.1:27017/yt-app-1")
.then(()=>console.log("MongoDB connected"))
.catch((err)=>console.log("Mongo Error",err));

//SCHEMA:
const userSchema= new mongoose.Schema({
  firstName:{
    type: String,
    required: true,

  },
  lastName:{
    type: String
  },
  email:{
    type: String,
    required: true,
    unique: true,
  },
  jobTitle:{
    type: String
  },
  gender:{
    type: String
  }
})
const user= mongoose.model("user",userSchema);
//MIDDLEWARE:

//built-in middleware:
app.use(express.urlencoded({ extended: false }));

//syntax of khudka middleware:
app.use((req, res, next) => {
  console.log("Hello from middleware 1");
  // res.json({status: "success", msg: "hello from middleware 1"}); //this would end the response and would not go further.
  req.myName = "Ananya"; //this would be available everywhere in routes and middlewares!
  next();
});

//A middleware joh headers add/ read kar raha:
app.use((req, res, next) => {
    console.log(req.headers);
    res.setHeader("X-myName","Ananya");
  next();
});

//A middleware which logs the response timing:
app.use((req, res, next) => {
  fs.appendFile(
    "./log.txt",
    `Date & Time: ${Date.now()}, Method: ${req.method}, Path: ${req.path}\n`,
    (err, data) => {
      next();
    }
  );
});



//Routes:
app.get("/users", (req, res) => {
  console.log(req.myName);
  return res.json(users);
});

//Creates Users: 
app.post("/users",async (req, res) => { 
  const body = req.body;
  

  });

//Multiple Request, Same Route:
app
  .route("/users/:id")
  .get((req, res) => {
    const id = Number(req.params.id);

    const user = users.find((user) => user.id === id);
    if (user) {
      return res.json(user);
    } else {
      return res.status(404).send(
        "Uh oh! Seems like we do not have any user with this id :( "
      );
    }
  })
  .patch((req, res) => {
    res.json({ status: "success" });
  })
  .delete((req, res) => {
    res.json({ status: "pending" });
  });

//SERVER:
app.listen(PORT, () => {
  console.log(`Server started on Port: ${PORT}`);
});
