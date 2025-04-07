const express = require("express");
const app = express();
const { connectMongoDb } = require("./connection");
const { logReqRes } = require("./middlewares/logReqRes");
const userRouter = require("./routes/user");
const port = 8000;

//Connection
connectMongoDb("mongodb://127.0.0.1:27017/practice-app-1")
  .then(() => console.log("MongoDB connected!"));

// Middlewares:
app.use(express.urlencoded({extended: false}));
app.use(logReqRes("./data/log.txt"));
//Routes:
app.use("/api/users", userRouter);

app.listen(port, () => {
  console.log("Sever running on port: ", port);
});
