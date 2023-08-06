const fs = require("fs");
const http = require("http");

const _loginHtml = fs.readFileSync("./Bavly/login.html", "utf-8");
const _loginCSS = fs.readFileSync("./Bavly/login.css", "utf-8");
const _signupHtml = fs.readFileSync("./Bavly/login.html", "utf-8");

function requestListener(req, res) {
  console.log(req.url);
  if (req.url === "/login")
    res.end(`<!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Form</title>
  </head>
  <body>
      <div class="wrapper">
          <span class="pg-animation"></span>
          <div class="form-box login">
              <h2>Login</h2>
              <form action="#" method="post">
                  <div class="input-box">
                      <input type="text" required>
                      <label>User Name</label>
                      <i class='bx bxs-user'></i>
                  </div>
                  <div class="input-box">
                      <input type="password" required>
                      <label>password</label>
                      <i class='bx bxs-lock-alt' ></i>
                  </div>
                  <button type="submit" class="btn">Login</button>
                  <div class="logreg-link">
                      <p>Dont have an account? <a href="register.html" class="register-link">sign-up</a></p>
                  </div>
              </form>
          </div>
          <div class="info-text login">
              <h2>Welcome Back!</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing.</p>
          </div>
      </div>
  </body>
  </html>`);
  if (req.url === "/signup")
    res.end(`<!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Form Page</title>
      <link rel="stylesheet" href="./signup.css" />
    </head>
    <body>
      <div class="wrapper">
        <span class="pg-animation"></span>
        <span class="pg-animation-2"></span>
        <div class="form-box register">
          <h2>SIGN UP</h2>
          <form action="#" method="post">
            <div class="input-box">
              <input type="text" required />
              <label>User Name</label>
              <i class="bx bxs-user"></i>
            </div>
            <div class="input-box">
              <input type="number" required />
              <label>Phone Number</label>
              <i class="bx bx-phone"></i>
            </div>
            <div class="input-box">
              <input type="email" required />
              <label>Email</label>
              <i class="bx bxs-envelope"></i>
            </div>
            <div class="input-box">
              <input type="password" required />
              <label>password</label>
              <i class="bx bxs-lock-alt"></i>
            </div>
            <div class="input-box">
              <input type="password" required />
              <label>Confirm password</label>
              <i class="bx bxs-lock-alt"></i>
            </div>
            <button type="submit" class="btn">Sign Up</button>
            <div class="logreg-link">
              <p>
                Already have an account?
                <a href="index.html" class="login">login</a>
              </p>
            </div>
          </form>
        </div>
        <div class="info-text register">
          <h2>Welcome Back!</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing.</p>
        </div>
      </div>
    </body>
  </html>
  `);
  if (req.url === "/") res.end("<h1> WELCOME BAVLY </h1>");
}

const server = http.createServer(requestListener);

server.listen(5000);
