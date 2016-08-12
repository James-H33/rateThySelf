const express       = require('express');
const bodyParser    = require('body-parser');
const mysql         = require('mysql');

// Ports
const port      = process.env.PORT || 3000;
const portIP    = process.env.IP;

// Declare var for express
const app = express();

// Express Settings
app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get('/', function(req, res, next) {
    res.render('index');
});

app.listen(port, portIP, console.log('Server has started..'));
