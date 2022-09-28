const express = require('express');

const app = express();

app.get("/", (req, res) => {
  res.send("Hello");
});

app.get("/contact", (req, res) => {
  res.send("Contact me at: pandey_hari2@hotmail.com");
});

app.get("/about", (req, res) =>{
  res.send("<h1>I am a fullstack developer. </h1>");
});

//app.listen(3000, () => {console.log("Server started at port 3000");});
