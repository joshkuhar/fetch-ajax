var express = require('express');
var bodyParser = require('body-parser');
var jsonParser = bodyParser.json();

var app = express();
app.use(express.static('public'));
app.use(jsonParser);  

wordCache = [];

app.get('/a', function(req, res) {
    res.json(wordCache.splice(0, 1)[0])
});

app.post('/b', jsonParser, function(req, res) {
    wordCache.push(req.body),
    res.json({wordCache: wordCache})
});

app.put('/', jsonParser, function(req, res){
});

app.delete('/', function(req, res) {
});
app.get("*", function(req, res) {
    console.log('test');    
});

app.listen(8080);
