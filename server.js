var http = require('http');
var router = require('./router');
var helpers = require('./helpers');

router.register('/speak', function(req, res) {
	console.log('Speak request received');	
	helpers.speak(req, res);
});

var server = http.createServer(function (req, res) {
	handler = router.route(req);
	handler.process(req, res);
});

server.listen(8082);
console.log('Server running');