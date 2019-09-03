let http = require("http");
// Create a server
let firstApp = http.createServer(function(request, respond){
  if (request.url == "/") {
    respond.end("Hello, and welcome to our website.");
  };

  if (request.url == "/about") {
    respond.end("Thank you for your interest in our company.");
  }; 
  
  respond.end("We cannot find the page you are looking for.");
});

//Tell the server to listen for and respond to incoming request
firstApp.listen(3000);

