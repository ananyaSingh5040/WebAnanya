//IMPORT STATEMENTS:
const express = require("express");

//HANDLER FUNCTION:
const app = express();

//HTTP REQUESTS:

app.get("/", (req, res) => {
  return res.send("Hello from express homepage");
});
app.get("/about", (req, res) => {
  return res.send(
    "Hello from express aboutpage " +
      req.query.name +
      " your age is: " +
      req.query.age
  );
});

//SERVER:
app.listen(8000, () => {
  console.log("Kem palty , working server mast haa");
});
