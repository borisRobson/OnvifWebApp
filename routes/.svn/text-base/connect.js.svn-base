var onvif = require('onvif');
var express = require('express');
var _ = require('underscore');
var router = express.Router();
var cameras =  [];
var newCams = [];

router.route('/')
.get(function(req,res){
  console.log(req.body);
    console.log("3");    
    var  Cam = require('onvif').Cam;    
    new Cam({    
      hostname: req.query.host,
      username: req.query.user,
      password: req.query.pass
        }, function(err) {
            this.getStreamUri({protocol:'RTSP'}, function(err, stream) {
                res.status(200);
            res.json(stream);
            res.end();
            console.log(stream);
    });
  });
})


module.exports = router;
