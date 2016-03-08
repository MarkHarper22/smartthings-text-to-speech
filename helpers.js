var url = require('url');
var fs = require('fs');
var Ivona = require('ivona-node');
var lame = require('lame');
var Speaker = require('speaker');

// GETS THE URL PARAMS
function getURLParams (req) {
	var urlParts = url.parse(req.url, true);
	return urlParts.query;
}

// RETURNS A JSON HTTP RESPONSE
function httpResponse (res, response) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(response));
}

// TOGGLE LIGHTWAVE DEVICE
exports.speak = function (req, res) {

	var params = getURLParams(req);

	try {

		var ivona = new Ivona({
		    accessKey: params.accessKey,
		    secretKey: params.secretKey
		});

		ivona.createVoice(params.speak, {
		    body: {
		        voice: {
			        name: 'Salli',
		            language: 'en-US',
		            gender: 'Female'
		        }
		    }
		})
		.pipe(new lame.Decoder())
		.on('format', function (format) {
		    this.pipe(new Speaker(format));
		});

	} catch (e) {
		console.log('fault caught')
	}

	httpResponse(res, 'Request Received');

};