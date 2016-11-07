import express from 'express';

const app = express();
app.use('/css', express.static(__dirname + '/css'));
//change this to bundle.js later
app.use('/js', express.static(__dirname + '/js'));


app.get('/', function(req, res) {
	res.sendFile(__dirname + '/site.html');
});

app.listen(3000);