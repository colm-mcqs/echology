/**
 * Created by Margo on 31/07/15.
 */
var express = require('express')
    ,mongoose = require('mongoose');

var app = express()
    , bodyParser=require('body-parser')
    , env = process.env.NODE_ENV || "development"
    , config = require('./app/config/variables.js')[env]
    , apiRoutes = express.Router();

mongoose.connect(config.database); // connect to database

app
    .use(bodyParser.json())
    .use(bodyParser.urlencoded({ extended: false }))
    .use(express.static('app'))
    .set('superSecret', config.secret)// secret variable
    .set('views', 'app/partials')
    .engine('html', require('ejs').renderFile)
    .set('view engine', 'html');

require('./routes.js')(apiRoutes, app);
app.use('/api', apiRoutes);
var server = app.listen(3000, function () {
    var port = server.address().port;

    console.log('Example app listening at http://46.101.34.154:'+ port);
});