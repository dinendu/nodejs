var express = require('express');
var app = express();

app.get('/', function (req,res){
  res.send(' Hello Dinendu. This is a test. v1 ');
});

var server = app.listen(8080, function() {
    var host = server.address().address;
    var port = server.address().port;

    console.log('Example app listing at http://%s;%s',host,port);
    });
