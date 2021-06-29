const express = require("express");
const app = express();

app.use(express.json);
app.use(express.urlencoded())

app.get("/", function(req, res){
    res.send("<h1>I am sorta remembering it</h1>")
});

app.listen(3000, function(req, res){
    console.log("This is running on port 3000")
});

