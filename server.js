// Setup empty JS object to act as endpoint for all routes

projectData = {};  

// Require Express to run server and routes
const express = require('express');
// Start up an instance of app
const app = express();

/* Middleware*/
//Here we are configuring express to use body-parser as middle-ware.
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Cors for cross origin allowance
const cors = require('cors');
app.use(cors());
// Initialize the main project folder
app.use(express.static('website'));

const port = 8000;
// Setup Server

// // testing the server 
const server = app.listen(port, listening);
function listening(){
    console.log('server running');
    console.log(`running on locolhost:${port}`);
};



// Get route
app.get('/all' , ( req , res)=> {
    res.send(projectData);
});




// Post route
app.post('/add' , (req,res)=>{
    console.log(req.body);
    projectData = {
        date: req.body.date,
        temp :req.body.temp,
        feeling : req.body.feeling
    };
});






