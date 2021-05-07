const express = require("express");
const router = express.Router();
const User = require("../db/model");

//for the login
router.post("/auth/login", async (req, res) => {
  let { email, password } = req.body;
  let user = await User.findUser(email, password);
  console.log("===this is user", user);
  if (user) {
    req.session.user = user._id;
    console.log("hey", req.session.user);
    res.json({ message: "you're logged in", auth: true });
  } else {
    res.json({ message: "unable to login", auth: false });
  }
});

//for the signup
router.post("/auth/signup", (req, res) => {
  const user = new User(req.body);
  req.session.user = user._id;
  console.log("session", req.session.user);
  user
    .save()
    .then((result) => {
      res.json({ message: "successfully registred", auth: true });
      console.log("result", result);
    })
    .catch((err) => {
      res.json({ message: "failed to register", auth: false });
    });
});
// to verify if he's logged
router.get("/auth/verify", (req, res) => {
  console.log("verifyyy", req.session);
  if (req.session.user) {
    return res.json({ message: "you are logged in ", auth: true });
  }
  return res.json({ message: "you are NOT logged in ", auth: false });
});
router.get("/auth/logout", (req, res) => {
  req.session.destroy();
  res.json({ auth: false });
});
module.exports = router;
