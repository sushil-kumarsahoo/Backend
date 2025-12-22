const express = require("express");

const app = express();


app.use(express.json());

app.post("/todo", function(req,res){

});

app.get("/todo", function(req,res){

});

pp.put("/completed", function(req,res){

}); 

app.listen(3000);