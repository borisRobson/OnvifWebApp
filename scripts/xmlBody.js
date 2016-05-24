var exports = module.exports = {};

exports.setPreset = function(profile, presetName){
	var xmlBody =
	 "<s:Body xmlns:xsi='http://www.w3.org/2001/XMLSchema-instance'"+ 
		"xmlns:xsd='http://www.w3.org/2001/XMLSchema'>"+
		"<SetPreset xmlns='http://www.onvif.org/ver20/ptz/wsdl'>"+
			"<ProfileToken>"+profile+"</ProfileToken>"+
			"<PresetName>"+presetName+"</PresetName>"+
		"</SetPreset>"+
	"</s:Body>"+
"</s:Envelope>"

return xmlBody;

}