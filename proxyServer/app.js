const express = require("express");
const app = express();
const api_helper = require("./API_helper");

app.get("/", (req, res) => {
  res.send("Welcome to CORS server 😁");
});

app.get("/cors", async (req, res) => {
  res.set("Access-Control-Allow-Origin", "*");
  const url = req.query.url;
  let response = await api_helper.make_API_call(url);
  res.send(response);
});

app.listen(8080, () => {
  console.log("listening on port 8080");
});
