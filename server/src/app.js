require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const bodyparser = require("body-parser");
const cors = require("cors");
const app = express();
const port = process.env.PORT || 3001;
const jwt = require("jsonwebtoken");
const router = require("./routes");
const session = require("express-session");
app.use(bodyparser.urlencoded({ extended: false }));
app.use(bodyparser.json());
app.use(cors());

app.use(
  session({
    secret: "hdsjkhdjkshdkjhskd",
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false },
  })
);
app.use("/", router);
mongoose.connect(process.env.MONGOURI, {
  useNewUrlParser: true,
  userUnifiedTopology: true,
});
mongoose.connection.on("connected", () => {
  console.log("connected to database");
});

app.listen(port, () => {
  console.log("listening on port 3001");
});
