/**
 * Created by Boikov on 3/14/2017.
 */
const express = require('express');
const app     = express();
const router  = express.Router();
var counter   = 0;
router.get('/api/counter', function (req, res) {
	res.status(200).json({
		data: counter
	});
});

router.post('/api/increment', function (req, res) {
	counter++;
	res.status(200).json({
		data: counter
	});
});

router.post('/api/decrement', function (req, res) {
	counter--;
	res.status(200).json({
		data: counter
	});
});

app.use(router);
app.use(express.static('public'));

process.on('uncaughtException', function (err) {
	console.log(err);
});

app.listen(5000, function () {
	console.log("Server start on " + 5000 + " port");
});