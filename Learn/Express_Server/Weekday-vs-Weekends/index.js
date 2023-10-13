const express = require("express");
const bodyparser  = require ("body-parser");

const app = express();

app.use(bodyparser.urlencoded({ extended: true }));
const d = new Date();
let day = 6;
var dayname,advice;
app.get("/",(req,res,next)=>{
    if (day==0 || day ==6){
        dayname="weekend";
        advice = "fun";
    }
    else{
        dayname="weekday";
        advice = "work";
    }
    var d = new Date().getSeconds()
    
    res.render("day.ejs",{
        title:"Ejs TAGs",
        second: d,
        text:"<em>this is a text</em>"
});
})

app.listen(3000);