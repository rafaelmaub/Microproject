const express = require("express");
const app = express();

// Handle GET requests to the root path
app.get('/', function(req, res) {
    console.log("Received a request from test...!!!");
    res.sendFile(__dirname + '/public/index.html');
});

app.get('/api', function(req, res) {
    console.log("Received a request from test...!!!");
    res.sendFile(__dirname + '/public/api.html');
});

// document.querySelector('#retrieveData').addEventListener('click', () => {
//     let rawdata = readFileSync('./data/items.json');
//     let equipment = JSON.parse(rawdata);
//     console.log(equipment);
//     document.dispatchEvent(myEvent);
// });


app.listen(3000, function () {
    console.log("Server is running on localhost3000");
  });



