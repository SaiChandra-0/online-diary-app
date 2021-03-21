const express = require("express");
const session = require("express-session");

const app = express();
app.set("view engine", "ejs");

app.use(
  session({
    secret: "My Secret Diary",
    resave: false,
    saveUninitialized: false,
  })
);

app.use((req, res, next) => {
  res.locals.isAuthenticated = req.session.isLoggedIn;
  res.locals.username = req.session.username;
  next();
});

app.use((req, res, next) => {
  if (req.session.isLoggedIn) {
    req.username = req.session.username;
  }
  next();
});

app.use(express.urlencoded({ extended: false }));
app.use(express.static("./public"));

app.get("/", (req, res) => {
  // if (req.session.isLoggedIn) {
  //   return res.redirect(`/${req.user}`);
  // }
  res.render("home", { title: "diary-app" });
});

app.use("/auth", require("./routes/auth"));
app.use(require("./routes/user"));

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log("server is running");
});
