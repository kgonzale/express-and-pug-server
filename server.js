// 1.  working server on your beaglebone.  The server should display a page that has the following information

// your name,
// the current time,
// the time the beagle bone has been up
// the IP address of the beagle bone

const express = require("express");
const app = express();
const port = 3000;

const fs = require("fs");
const ip = require("ip");

app.set("view engine", "pug");
app.set("views", "./views");

app.get("/", (req, res) => {
  // let uptime = require("os").uptime();
  let ipaddress = ip.address();

  res.render("index", {
    title: "Project 1 - BBB Server",
    name: "Kevin Gonzalez",
    // test: uptime,
    address: ipaddress
  });
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
