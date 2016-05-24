var
  http = require('http'),
  Cam = require('onvif').Cam;

new Cam({
  hostname: "10.10.40.62",
  username: "admin",
  password: "admin"
}, function(err) {
  
  this.getStreamUri({protocol:'RTSP'}, function(err, stream) {
   // console.log("URI: ",stream);
    });
  this.getCapabilities(function(err,capabilities,xml){
//	console.log("INFO: " , capabilities);	
	});	
	this.getSystemDateAndTime(function(err,dateTime){
	//	console.log("TIME: ",dateTime);
	});
	this.getProfiles(function(err,prof){
		//console.log("PROFILES: ",prof);
		var tok = prof[1];
		console.log("TOKEN: ",tok);
	});
  });
