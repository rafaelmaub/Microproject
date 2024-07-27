const express = require("express");
const fs = require("fs");
const app = express();

// Handle GET requests to the root path
app.get('/', function(req, res) {

    res.sendFile(__dirname + '/public/index.html');
});

app.get('/api', function(req, res) {

    res.sendFile(__dirname + '/public/api.html');
});

const read = async () => {
    console.log("reading")
    const rawdata = fs.readFile("data/items.json");
    let equipment = JSON.parse(rawdata);
    console.log(equipment);
  }

app.get('/retrieveData', function(req, res) {
    console.log("Received a request from test...!!!");


    fs.readFile(__dirname + '/data/items.json', 'utf8', (err, data) => {
        if (err) 
        {
            console.error(err);
            return;
        }
        let equipment = JSON.parse(data);
        console.log(equipment);
    });
    res.sendFile(__dirname + '/public/api.html');
    
});


app.listen(3000, function () {
    console.log("Server is running on localhost3000");
  });



