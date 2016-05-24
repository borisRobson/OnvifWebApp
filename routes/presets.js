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
			password: req.query.pass
		},function(error,resp){		
			if(!error){
				console.log("ok");				
				this.getPresets(function(err,prsts){
					if(!err){
						res.json(prsts);											
					}
					else{
						res.json(err);
					}
					res.end();
			})		
		}
		else{
			console.log(error);
			res.json(error);
		};
	})
})
	.post(function(req,res){
			new Cam({
		hostname: req.body.host,
		username: req.body.user,
		password: req.body.pass		
	},function(error,resp){
		var profile = req.body.profile;
		var pre = req.body.preset;
		console.log ( pre);
		if(!error){
			try{

			this.gotoPreset({preset:pre}, function(err,data){
				if(!err){
					res.status(200);
					console.log(data);
				}
				else{
					console.log(err);
				}
				res.end();
			})
		}
		catch(Err){
			console.log(Err);
		}
	}
	})
})

router.route('/modify')
	.post(function(req,res){
			console.log("add");		
		new Cam({
		hostname: req.body.host,
		username: req.body.user,
		password: req.body.pass
	},function(error,resp){
		var profile = req.body.profile;
		var pre = req.body.name;
		console.log ( pre);
		
			try{
			this.addPreset({preset:pre}, function(err,data){
				if(!err){
					res.status(200);
					res.json(data);
					console.log("ok: ",  data);
				}
				else{
					console.log("fail: ", err);
				}
				res.end();
			})
		}
		catch(Err){
			console.log("err : ",Err);
		}
	})
})
	.get(function(req,res){new Cam({
		hostname: req.query.host,
		username: req.query.user,
		password: req.query.pass
	},function(error,resp){		
		var pre = req.query.preset;
		console.log ( pre);
		if(!error){
			try{
				console.log("rem");
				if(pre !== null){
					this.removePreset({preset:pre}, function(err,data){
					if(!err){
						res.status(200);
						console.log(data);
						res.json(data);
					}
					else{
						console.log(err);
					}
					res.end();
				})
			}
		}
		catch(Err){
			console.log(Err);
		}
	}
	})
});
	



module.exports = router;