const express   = require('express');
const router    = express.Router();
const mysql     = require('mysql');

// Connect to database "rateThySelf"
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'rateThySelf'
});


router.get('/', function(req, res, next) {

    getRatings(function(err, rows) {
        if (err) console.log(err);
        console.log(rows);
        res.render('index', { rows: rows });
    });
});


router.post('/ratings', function(req, res, next) {
    var postData = req.body;
    console.log(postData);

    postRatings(postData, function(err, results) {
        if(err) console.log(err);
        res.redirect('/');
    });
});



module.exports = router;


function getRatings(cb) {
    var sql = 'SELECT * FROM user';
    db.query(sql, function(err, results) {
        if (err) return cb(err);
        return cb(null, results);
    });
}

function postRatings(data, cb) {
    var values = {
        name: data.name,
        html: parseInt(data.html),
        css: parseInt(data.css),
        javascript: parseInt(data.javascript)
    }

    console.log(values);

    var sql = 'INSERT INTO user SET ?';
    db.query(sql, values, function(err, results) {
        if (err) return cb(err);
        return cb(null, results);
    });
}

function isNotEmpty(str, cb) {
    console.log(str);
    if (str.length > 0)
        parseToNum(str);
    return cb(err);
}
