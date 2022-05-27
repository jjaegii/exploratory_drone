const express = require('express');
const app = express();
var fs = require('fs');
var url = require('url');
var exec = require('child_process').exec;
const port = 3000;

app.use(express.static(__dirname));
app.locals.pretty = true;
app.listen(3000, () => {
	console.log("Server has been started");
})

app.get("/", (req,res) => {
	res.redirect('control');
});

app.get("/control", (req,res) => {
	fs.readFile('index.html', (error, data) => {
		if(error) {
			console.log('error : ' + error);
		}
		else {
			res.writeHead(200, {'Content-Type' : 'text/html'});
			res.end(data);
		}
	})
})

app.get("/up", (req,res) => {
	exec('python3 /home/pi/led_on.py on',
	function() {
		console.log("up");
	});
});

app.get("/down", (req,res) => {
	exec('python3 /home/pi/led_on.py off',
	function() {
		console.log("down");
	});
});

var child = exec('/home/pi/nodejs/mjpg.sh', 
	function() {
		console.log('camera on');
});