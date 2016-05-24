var exports = module.exports = {};
var btoa = require('btoa');
var sha1 = require('sha1');


exports.createHeader = function(user,password){
	var date = new Date();
	var now = date.toISOString();
	var nonceLength = 8;
	var rand = "";
	for (var i =0; i <nonceLength; i++){
		rand += Math.floor((Math.random() * 255) + 0);
	}
	
	var encodedNonce = btoa(rand);
	var sha = btoa(sha1(rand + now + password));
	var xmlHeader = "<?xml version='1.0' encoding='UTF-8'?>" +
        "<s:Envelope xmlns:s='http://www.w3.org/2003/05/soap-envelope'>" +
        "<s:Header>" +
        "<Security s:mustUnderstand='1' xmlns='http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-wssecurity-secext-1.0.xsd'>" +
        "<UsernameToken>" +
        "<Username>" + user + "</Username>" +
        "<Password Type='http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-username-token-profile-1.0#PasswordDigest'>" +
        sha +
        "</Password>" +
        "<Nonce EncodingType='http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-soap-message-security-1.0#Base64Binary'>" +
        encodedNonce +
        "</Nonce>" +
        "<Created xmlns='http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-wssecurity-utility-1.0.xsd'>" +
        now +
        "</Created>" +
        "</UsernameToken>" +
        "</Security>" +
        "</s:Header>";
	return xmlHeader;
}

