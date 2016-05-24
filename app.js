var express = require("express");
var app = express();
var http = require('http');
var router = express.Router();
var _ = require('underscore');
var bodyParser = require('body-parser');

var discRoute = require('./routes/discovery');
var connRoute = require('./routes/connect');
var movRoute = require('./routes/movement');
var detRoute = require('./routes/details');
var presetRoute = require('./routes/presets');
var capRoute = require('./routes/capabilities');
var locRoute = require('./routes/location');
var infoRoute = require('./routes/getInfo');

var path = __dirname + '/views/';

router.use(function (req,res,next) {
  console.log("/" + req.method);
  next();
});

router.get("/",function(req,res){
    console.log("1");
  res.sendFile(path + "index.html");
});

app.use(bodyParser());

app.use("/",router);

app.use('/discovery',discRoute);

app.use('/connect',connRoute);

app.use('/movement',movRoute);

app.use('/details',detRoute);

app.use('/presets', presetRoute);

app.use('/location',locRoute);

app.use('/capabilities',capRoute);

app.use('/getInfo', infoRoute);

app.listen(3000,function(){
  console.log("Live at Port 3000");
});

