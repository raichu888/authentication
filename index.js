const express = require("express");
const app = express();
const jwt = require("jsonwebtoken");
const JWT_SECRET = "tushar123";

const users = [];

app.use(express.json());


app.get('/',function(req,res){
    res.sendFile(__dirname + "/public/index.html");
})

// Signup route
app.post("/signup", function (req, res) {
  const username = req.body.username;
  const password = req.body.password;

  users.push({ username: username, password: password });

  res.json({
    message: "You are signed up!",
  });
});

// Signin route
app.post("/signin", function (req, res) {
  const username = req.body.username;
  const password = req.body.password;

  let foundUser = null;
  for (let i = 0; i < users.length; i++) {
    if (
      users[i].username === username &&
      users[i].password === password
    ) {
      foundUser = users[i];
    }
  }

  if (foundUser) {
    const token = jwt.sign({ username: username }, JWT_SECRET);
    res.json({ token: token });
  } else {
    res.json({ message: "Wrong username or password" });
  }
});

// Auth middleware
function auth(req, res, next) {
  const token = req.headers.token;

  const userData = jwt.verify(token, JWT_SECRET);

  if (userData.username) {
    req.username = userData.username;
    next();
  } else {
    res.json({ message: "Login first" });
  }
}

// Get user info
app.get("/me", auth, function (req, res) {
  const username = req.username;

  let foundUser = null;
  for (let i = 0; i < users.length; i++) {
    if (users[i].username === username) {
      foundUser = users[i];
    }
  }

  res.json({
    username: foundUser.username,
    password: foundUser.password,
  });
});

// Start the server
app.listen(3000);
