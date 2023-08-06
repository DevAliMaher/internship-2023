const fs = require("fs");
const http = require("http");

const _loginHtml = fs.readFileSync("./Bavly/login.html", "utf-8");
const _loginCSS = fs.readFileSync("./Bavly/login.css", "utf-8");
const _signupHtml = fs.readFileSync("./Bavly/signup.html", "utf-8");
const _signUpCSS = fs.readFileSync("./Bavly/signup.css", "utf-8");

function requestListener(req, res) {
  console.log(req.body)
  console.log(req.method)
  // login
  if (req.url === "/login") {
    res.writeHead(200, { "Content-type": "text/html" });
    res.end(_loginHtml);
  }

  if (req.url === "/login.css") {
    res.writeHead(200, { "Content-type": "text/css" });
    res.end(_loginCSS);
  }
  // sign up
  if (req.url === "/signup") {
    res.writeHead(200, { "Content-type": "text/html" });
    res.end(_signupHtml);
  }

  if (req.url === "/signup.css") {
    res.writeHead(200, { "Content-type": "text/css" });
    res.end(_signUpCSS);
  }
  // welcome

  if (req.url === "/") res.end("<h1> WELCOME BAVLY </h1>");
}

const server = http.createServer(requestListener);

server.listen(5000);
