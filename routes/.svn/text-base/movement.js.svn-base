var onvif = require('onvif');
var express = require('express');
var _ = require('underscore');
var router = express.Router();
var cameras =  [];
var newCams = [];
var z = 0;

router.route('/')
.post( function(req,res){
    console.log("4");
     var  Cam = require('onvif').Cam;
    var dir = req.body.dir;
    var type = req.body.type;
    var pan = req.body.pan;
    var tilt = req.body.tilt;
    var profile = req.body.profile;

    var x,y;
    
    switch(dir){
        case "upLeft":
            {
                x = -1;
                y = 1;                
                break;
            }
        case "up":
            {
                x = 0;
                y = 1;
                break;
            }
        case "upRight":
            {
                x = 1;
                y = -1;
                break;
            }
        case "left":
            {
                x = -1;
                y = 0;
                break;
            }
        case "right":
            {
                x = 1;
                y = 0;
                break;
            }
        case "downLeft":
            {
                x = -1;
                y = -1;
                break;
            }
        case "down":
            {
                x = 0;
                y = -1;
                break;
            }
        case "downRight":
            {
                x = 1;
                y = -1;
                break;
            }         
            case "zoomIn":
            {
                x = 0; 
                y = 0;
                
                if (z < 0){
                    z = 0.1
                }
                else if (z < 1){
                    z += 0.1;
                }
                
                console.log("z: ",z);
                break;
            }
            case "zoomOut":
            {
                x = 0; 
                y = 0;
                if (z > 0){
                    z = -0.1
                }
                else if (z > -1){
                    z -= 0.1;
                }
                console.log("z: ",z);
                break;
            }
    }
    
    var xSpeed = (100-pan)/100;
    var ySpeed = (100-tilt)/100;
    
    switch(type){
        case "abs":
        {
        
            break;
        }
        case "cont":
        {
        
            break;
        }
        case "rel":
        {
             new Cam({    
              hostname: req.body.host,
              username: req.body.user,
              password: req.body.pass
                }, function(err,resp) {                    
                    this.relativeMove({profileToken:profile,x:x,y:y,zoom:z,'speed.x':xSpeed,'speed.y':ySpeed});                    
                    var msg = (err === null) ? {status:"ok"}: err;
                    console.log("response: ", msg);
                    if(err !== null){
                        console.log("Error :", err)};
                    res.status(200);
                    res.json(msg);
                    res.end();
            });
            break;
        }    
    }
})

module.exports = router;