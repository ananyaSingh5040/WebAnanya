const http = require("http");
const fs = require("fs");
const url = require("url");
const express = require("express");

//create an app using express:
const app= express();

function myHandler(req, res) {
  if (req.url === "/favicon.ico") {
    return res.end();
  }
  const log = `${Date.now()}: New request received , URL: ${req.url} \n`;
  const myUrl = url.parse(req.url, true);
  console.log(myUrl);
  fs.appendFile("./log.txt", log, (err) => {
    if (err) console.log("Logging error:", err);
  });
  switch (myUrl.pathname) {
    case "/":
      res.end("hello from homepage");
      break;
    case "/about":
      res.end("hello from Aboutpage");
      break;
    case "/contact":
      res.end("hello from contactPage");
      break;
    case "/youtube":
      const search = myUrl.query.search;
      res.end("Here are your search results for " + search);
      break;

    default:
      res.end("404 not found");
  }
}
//Your Server madame:
const myServer = http.createServer(myHandler);
myServer.listen(8000, () => {
  console.log("Server Started babygirl, kaithe hi hecker ho aap ;) !");
});
