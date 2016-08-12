const express       = require('express');
const favicon       = require('serve-favicon');
const cookieParser  = require('cookie-parser');
const logger        = require('morgan');
const bodyParser    = require('body-parser');
const mysql         = require('mysql');

// Ports
const port      = process.env.PORT || 3000;
const portIP    = process.env.IP;

// Declare var for express
const app = express();

// Require Routes
const IndexRoutes = require('./routes/indexRoutes');


// Express Settings
app.set('view engine', 'ejs');
app.use(logger('dev'));
app.use(cookieParser());
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Use Routes
app.use('/', IndexRoutes);


app.listen(port, portIP, console.log('Server has started..'));
