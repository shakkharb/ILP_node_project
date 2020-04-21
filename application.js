const express = require("express");
const UserRoutes = require("./routes/user");
const HomeRoutes = require("./routes/home");
const application = express();
const path = require("path")
const bodyParser = require("body-parser");

application.set("view engine", "ejs");
application.set("views", path.join(__dirname, "./views"));

// Getting body information for JSON and Form data.
application.use(bodyParser.json({ type : "application/json" }))
application.use(bodyParser.text({ type : "text/html" }))
application.use(bodyParser.urlencoded({ extended : true }))

// handling for user routes.
application.use("/user", UserRoutes);
application.use("/home", HomeRoutes);

// default export
module.exports = application;

