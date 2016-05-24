var onvif = require('onvif');
var express = require('express');
var _ = require('underscore');
var router = express.Router();
var cameras =  [];
var newCams = [];
router.route('/')

 .get(function(req,res){
    onvif.Discovery.probe(function(err, cams) {    
        if (err) { throw err; }
        cams.forEach(function(cam) {        
        console.log(cam.hostname);   
        cameras.push(cam.hostname);
        })    
    newCams = _.uniq(cameras);    
    res.status(200);
    res.json(newCams);    
    })
});

module.exports = router;
   

    