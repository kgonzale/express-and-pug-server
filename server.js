// 1.  working server on your beaglebone.  The server should display a page that has the following information

// your name,
// the current time,
// the time the beagle bone has been up
// the IP address of the beagle bone

const express = require("express");
const app = express();
const port = 3000;

const fs = require("fs");
const moment = require("moment");
const publicIp = require("public-ip");
const address = require("address");

app.set("view engine", "pug");
app.set("views", "./views");

app.get("/", async (req, res) => {
  let time = moment().format("MMMM Do YYYY, h:mm a");

  let publicIP = await publicIp.v4();
  let localIP = address.ip();

  function getSysUptime() {
    return parseFloat(
      fs
        .readFileSync("/proc/uptime", {
          encoding: "utf8"
        })
        .split(" ")[0]
    );
  }
  console.log(getSysUptime());

  res.render("index", {
    title: "Project 1 - BBB Server",
    name: "Kevin Gonzalez",
    currentTime: time,
    local: localIP,
    public: publicIP
  });
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
