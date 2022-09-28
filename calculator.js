const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({extended:true}));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
})

app.post("/", (req, res) => {
  console.log(req.body);
  var sum = Number(req.body.num1) + Number(req.body.num2);
  res.send("The sum is: " + "<h1><em>" + sum + "</em></h1>");
})

app.listen(3000, () => {
  console.log("Server listening at port 3000");
});
