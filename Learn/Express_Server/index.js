import express from "express";
import morgan from "morgan";
const app = express();
const port = 3000;

app.use(morgan("tiny"));
app.get("/",(req,res)=>{
    
    console.log("sdf");
    
    
})

app.post("/submit",(req,res)=>{
    console.log(req.body);
});
app.listen(port,()=>{
    console.log("runing");
});