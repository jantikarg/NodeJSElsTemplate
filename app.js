var exp = require('express');
var handlers = require('./routes/routes');
var app = exp();

app.set('view engine', 'ejs');// ejs is always used within express -- view engine is ejs.

app.get('/', handlers.homeFn);

app.get('/:city', handlers.cityFn);

var port = process.env.PORT || 4000;
app.listen(port, function(){
    console.log("Server is listening on port" + port);
});

