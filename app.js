"use strict";

const PORT = 3000;

const express = require("express");
const app = express();

//라우팅
const home = require("./routes/home");

//앱세팅
app.set("views", "./views");
app.set("view engine", "ejs");
app.engine("html", require("ejs").renderFile);

app.use("/", home); // use 는 미들웨어 사용하는거

module.exports = app;
