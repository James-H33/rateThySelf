const express   = require('express');
const router    = express.Router();
const mysql     = require('mysql');

const db = mysql.createConnection({
    host      : 'localhost', 
    user      : 'root', 
    password  : '', 
    database  : 'rateThySelf'
});


router.get('/user/:id', function(req, res, next) {
    var userID = req.params.id;
    getOneRating(userID, function(err, results) {
        if(err) console.log(err);
        console.log(results);
        res.render('user', { user : results[0] });
    });
});




module.exports = router;



function getOneRating(ID, cb) {
    var sql = 'SELECT * FROM user WHERE ID = '+ID+'';
    db.query(sql, function(err, results) {
        if (err) return cb(err);
        return cb(null, results);
    });
}