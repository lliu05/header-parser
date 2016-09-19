"use strict";

var express = require("express");
var path = require("path");
var app = express();

app.use(express.static(path.join(__dirname, 'static/html')));
app.use(express.static(path.join(__dirname, 'static/css')));

app.route("/whoami").get(function (req, res) {
    var ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress,
        language = req.headers["accept-language"].split(",")[0],
        software = req.headers["user-agent"].split("(")[1].split(")")[0],
        result = {
            "ipaddress": ip,
            "language": language,
            "software": software
        };
    res.send(result);
});

app.listen(process.env.PORT);
