// 1.  working server on your beaglebone.  The server should display a page that has the following information

// your name,
// the current time,
// the time the beagle bone has been up
// the IP address of the beagle bone

const express = require("express");
const app = express();
const port = 3000;
const fs = require("fs");

var ip = require("ip");
// var moment = require("moment");
app.set("view engine", "pug");
app.set("views", "./views");

app.get("/", (req, res) => {
  // let time = moment().format("MMMM Do YYYY, h:mm:ss a");
  let uptime = require("os").uptime();
  let ipaddress = ip.address();

  let sys = function getSysUptime() {
    return (
      parseFloat(
        fs
          .readFileSync("/proc/uptime", {
            encoding: "utf8"
          })
          .split(" ")[0]
      ) * 1000
    );
  };

  res.render("index", {
    title: "project 1",
    name: "Kevin Gonzalez",
    test: uptime,
    address: ipaddress,
    test: sys
  });
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
