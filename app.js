"use strict";

const PORT = 3000;

const express = require("express");
const app = express();

//라우팅
const home = require("./app/src/routes/home");

//앱세팅
app.set("views", "./app/src/views/home");
app.set("view engine", "ejs");
app.engine("html", require("ejs").renderFile);

app.use(express.static(__dirname + "/app/src/public"));

app.use("/", home); // use 는 미들웨어 사용하는거

module.exports = app;
