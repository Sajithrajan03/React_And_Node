import express from "express";
import bodyParser from "body-parser";
import { dirname } from "path";
import { fileURLToPath } from "url";
import { log } from "console";

const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 3000;
var password = "";
app.use(bodyParser.urlencoded({ extended: true }));

function check(req, res, next) {
  console.log(req.body['Password']);
  password= req.body['Password']
  next();
}

app.use(check);

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});

app.post("/submit", (req, res) => {
  
  password =  req.body["Password"];
  if (password ==="ppp"){
  res.sendFile(__dirname +"/public/index1.html");

}});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
