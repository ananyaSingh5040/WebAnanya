const express = require("express");
const app = express();
const fs = require("fs");
// require("./schedular1");
const users = require("./data/fakeData.json");
const port = 8000;

//MIDDLEWARE - kind of plugin, app.use se start hote hai

app.use(express.urlencoded({ extended: false }));

app.use((req, res, next) => {
  console.log("Hello from middleware 1");
  next();
});
app.use((req,res,next)=>{
    fs.appendFile("./data/log.txt",`\n ${Date.now()} ${req.method} ${req.path} ${req.ip}`,(err,data)=>{})
    next();
})

// Routes:
app.get("/", (req, res) => {
  return res.send("Namaste! Backend main aapka swagat hai!");
});
//HTML response
app.get("/users", (req, res) => {
  const html = `
    <ul>
    ${users.map((user) => `<li>${user.name}</li>`).join("")}
    </ul>
    `;
  res.send(html);
});
//JSON response
app.get("/api/users", (req, res) => {
  return res.json(users);
});
//Dynamic path parameter
app.get("/api/users/:id", (req, res) => {
  const id = Number(req.params.id);
  const returnedUser = users.find((user) => user.id === id);
  return res.json(returnedUser);
});

app.post("/api/users", (req, res) => {
  // TODO: create a user
  const body = req.body;
  console.log(body);
  users.push({ ...body, id: users.length + 1 });
  fs.writeFile("./data/fakeData.json", JSON.stringify(users), (err, data) => {
    return res.send({ status: "success", id: users.length });
  });
});
app.patch("/api/users:id", (req, res) => {
  // TODO: edit a user
  return res.json({ status: "pending" });
});
//GROUPING:
// app.route('/api/users/:id').get((req,res)=>{

// })
// .put((req,res)=>{})
// .patch((req,res)=>{})

app.listen(port, () => {
  console.log("Sever running on port: ", port);
});
