import express from "express";
import { Author, Song, User } from "./model/model.js";
import { Mongoose } from "./model/db.js";
import dotenv from "dotenv";
dotenv.config();

const app = express();
app.get("/ping", (req, res) => {
  res.send("pong");
});

Mongoose();

app.listen(3000, () => {
  console.log("listening on port 3000");
});
