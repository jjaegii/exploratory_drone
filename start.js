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
	console.log(req.ip + "에서 접속");
	res.redirect('control');
});

app.get("/control", (req,res) => {
	fs.readFile('control.html', (error, data) => {
		if(error) {
			console.log('error : ' + error);
		}
		else {
			res.writeHead(200, {'Content-Type' : 'text/html'});
			res.end(data);
		}
	})
});

app.get("/up", (req,res) => {
	exec('python3 ./gpio/led_on.py on');
});

app.get("/down", (req,res) => {
	exec('python3 ./gpio/led_on.py off');
});

app.get("/left", (req,res) => {
	exec('python3 ./gpio/servo.py 4');
});

app.get("/right", (req,res) => {
	exec('python3 ./gpio/servo.py 11');
});

var child = exec('./mjpg.sh', 
	function() {
		console.log('camera on');
});