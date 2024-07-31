const express = require("express");
const fs = require("fs");
const path = require('path');
const app = express();
const PORT = 3000; // 

const data = require('./data/items.json');

// Handle GET requests to the root path
app.get('/', function(req, res) {

    res.sendFile(__dirname + '/public/index.html');
});

app.get('/index', function(req, res) {

    res.sendFile(__dirname + '/public/index.html');
});

app.get('/about', function(req, res) {

    res.sendFile(__dirname + '/public/about.html');
});

app.get('/api', function(req, res) {

    res.sendFile(__dirname + '/public/api.html');
});

app.get('/contact', function(req, res) {

    res.sendFile(__dirname + '/public/contact.html');
});

app.get('/crud', function(req, res) {

    res.sendFile(__dirname + '/public/crud.html');
});

app.get('/items',(req, res)=>{
    res.json(data.items);
});

// CRUID
// http://localhost:3000/create
// http://localhost:3000/update
// http://localhost:3000/delete
// http://localhost:3000/read

    app.get('/read', (req, res) => {
        res.send('Practising .get() HTTP method for "Read/Retrieve"');
    });
    
    app.post("/create", (req, res) => {
        res.send('Practising .post() HTTP method for "Create"');
    });
    
    app.put("/update", (req, res) => {
        res.send('Practising .put() HTTP method for "Update"');
    });
    
    app.delete("/delete", (req, res) => {
        res.send('Practising .delete() HTTP method for "Delete"');
    });   
app.listen(PORT, ()=>{
    console.log(`Example app listening on http://localhost:${PORT}`);
});
