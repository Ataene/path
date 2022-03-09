const express = require("express");

const app = express();
const PORT = 3001;

app.get("/", function(req, res){

    res.send("Hello WOrld!");

})

app.get("/forest", function(req, res){
    
    let daylight = req.query.daylight;

    if(daylight === "true"){

        res.send("Yes there is daylight");
    } else {
        res.send("You did get it");
    }
})
app.listen(PORT, function(req, res){

    console.log("Server is running on port: " + PORT);
})