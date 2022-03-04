const http = require("http");
const express = require("express");
const app = express();
app.use(express.static('bundles'));

const httpServer = http.createServer(app);
app.get("/service1", (req, res) => res.sendFile("service1/main.js"));
app.get("/service2", (req, res) => res.sendFile("service2/main.js"));
httpServer.listen(8000, console.log("Start Server"));