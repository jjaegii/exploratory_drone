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

var mjpgchild = exec('./mjpg.sh', 
	function() {
		console.log('camera on');
});

app.get("/", (req,res) => {
	console.log(req.ip + "에서 접속");
	res.redirect('control');
});

var i = 0;
app.get("/control", (req,res) => {
	fs.readFile('control.html', (error, data) => {
		res.writeHead(200, {'Content-Type' : 'text/html; charset=utf-8'});
		res.end(data);
	})
});

app.get('/gps', (req,res) => {
	let writegps = new Promise(function(resolve, reject) {
        exec('./gpio/gpswrite.sh');
        resolve();
    }).then(function() {
		fs.readFile('./gpio/xy.txt', 'utf8', (error, data) => {
            res.send(data);
			res.end();
        });
	}).catch(function() {
        console.log('gps 값 읽기 실패');
    })
})

app.get('/distance', (req,res) => {
	let writedistance = new Promise(function(resolve, reject) {
		exec('./gpio/chowrite.sh');
		resolve();
	}).then(function() {
		fs.readFile('./gpio/distance.txt', 'utf8', (error,data) => {
			res.send(data);
			res.end();
		});
	}).catch(function() {
		console.log('distance 값 읽기 실패');
	});
})

app.get("/up", (req,res) => {
	exec('python3 ./gpio/move.py go');
});

app.get("/down", (req,res) => {
	exec('python3 ./gpio/move.py back');
});

app.get("/left", (req,res) => {
	exec('python3 ./gpio/move.py left');
});

app.get("/right", (req,res) => {
	exec('python3 ./gpio/move.py right');
});

app.get("/ledOn", (req,res) => {
	exec('python3 ./gpio/flash.py on');
});

app.get("/ledOff", (req,res) => {
	exec('python3 ./gpio/flash.py off');
});