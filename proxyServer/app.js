const express = require("express");
const app = express();
const axios = require("axios");

const WALL_IO_API_URL = "https://api.walls.io/v1/posts";
const WALL_IO_KEY = "93c534d9f3876e03c61235a8496365721f1e54b1";

app.get("/", (req, res) => {
  res.send("Welcome to CORS server 😁");
});

app.get("/cors", async (req, res) => {
  res.set("Access-Control-Allow-Origin", "*");
  try {
    const resp = await axios.get(WALL_IO_API_URL, {
      params: {
        access_token: WALL_IO_KEY,
        sort: "-created,-id",
        fields:
          "id,comment,type,external_image,external_name,post_image,post_video,post_link,created,modified",
        before: req.query.before,
        limit: 50,
        include_inactive: 1,
        media_types: "video,image",
      },
    });
    res.status(200).json({
      success: true,
      result: resp.data,
    });
  } catch (error) {
    res.send(error);
  }
});

app.listen(8080, () => {
  console.log("listening on port 8080");
});
