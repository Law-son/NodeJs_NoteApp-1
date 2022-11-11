var express = require('express');
var noteController = require('./controllers/noteController');

var app = express();

//setting up template/view engine
app.set('view engine', 'ejs');

//setup static file connections
app.use(express.static('./static_files'));

//start noteController
noteController(app);

//listen to port
app.listen(3000);
console.log("Listening to port 3000");