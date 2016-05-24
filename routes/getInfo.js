
var onvif = require('onvif');
var express = require('express');
var _ = require('underscore');
var router = express.Router();
var Cam = require('onvif').Cam;

router.route('/')
.get( function (req,res){
    try{
    new Cam({
        hostname : req.query.host,
        username : req.query.user,
        password: req.query.pass
    }, function (err,resp){
        console.log("info");
        
        this.getDeviceInformation(function(err, resp){
            var msg = (!err) ? resp : err;        
            res.status(200).json(msg);
            res.end();  
        })  
    })
}

    catch(Err){
        console.log(Err);
    }
})

module.exports = router;

