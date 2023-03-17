"use strict";

const PORT = 3000;

const express = require("express");
const bodyParser = require("body-parser");
const app = express();

//라우팅
const home = require("./app/src/routes/home");

//앱세팅
app.set("views", "./app/src/views/home");
app.set("view engine", "ejs");
app.engine("html", require("ejs").renderFile);
app.use(bodyParser.json());
//URL을 통해 전달되는 데이터에 한글 , 공백등과 같은 문자가 포함될 경우 제대호 인식되지 않는 문제 해결
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(__dirname + "/app/src/public"));

app.use("/", home); // use 는 등록해주는 메소드

module.exports = app;
