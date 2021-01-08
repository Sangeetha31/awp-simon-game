const express = require("express");
const bodyParser = require("body-parser");
const port = process.env.PORT || 3000

const app = express();
app.use(bodyParser.urlencoded({extended: true}));

app.get("/", function(req, res){
    res.sendFile(__dirname+"/index.html");
});

app.listen(port, function(){
    console.log("Server running on port",port)
});