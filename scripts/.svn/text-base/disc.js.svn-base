var onvif = require('onvif');
onvif.Discovery.on('device', function(cam){
// function would be called as soon as NVT responses 
	cam.username = "admin";
	cam.password = "admin";	
	//console.log(cam.hostname)
})
onvif.Discovery.probe();
var onvif = require('onvif');
onvif.Discovery.probe(function(err, cams) {
// function would be called only after timeout (5 sec by default) 
	if (err) { throw err; }
	cams.forEach(function(cam) {
		cam.username = "admin";
		cam.password = "admin";		
		console.log(cam.hostname)
	});
});