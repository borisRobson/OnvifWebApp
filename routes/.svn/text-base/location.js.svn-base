
var onvif = require('onvif');
var express = require('express');
var _ = require('underscore');
var router = express.Router();
var  Cam = require('onvif').Cam;


router.route('/')
	.get(function(req,res){
     new Cam({
        hostname: req.query.host,
        username: req.query.user,
        password: req.query.password
        },  function(err,resp){        
            this.getStatus(function(err,stat){   
                 var msg = (err !== null) ? err.toString() : stat;                      
                 respond(msg);         
            })
            function respond(message){                
                res.status(200).json(message);    
                res.end();            
            }            
        });
    });

    module.exports = router;
