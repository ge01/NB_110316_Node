var connect = require('connect');
var http = require('http');

// connect dispatcher, the core connect object, a function that takes a request
// and response arguments
var app = connect();

function profile(request, response){
  console.log('User requested profile');
}

function forum(request, response){
  console.log('User requested forum');
}

// optional argument of a path
app.use('/profile', profile);
app.use('/forum', forum);

// it takes a request argument as a listener
http.createServer(app).listen(8888);
console.log("Server is running...");

/*
function doFirst(request, response, next){
  console.log("Bacon");
  next();
}

function doSecond(request, response, next){
  console.log("Tuna");
  next();
}

app.use(doFirst);
app.use(doSecond);
*/
