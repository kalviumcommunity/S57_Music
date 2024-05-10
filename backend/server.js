import express from "express";
import { Mongoose } from "./model/db.js";
import dotenv from "dotenv";
import Authrouter from "./routes/auth/route.js";
import Songrouter from "./routes/song/route.js";
import Singerrouter from "./routes/singer/route.js";
import cors from "cors";
dotenv.config();

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(
  cors({
    credentials: true,
    origin: ["http://localhost:5173"],
  })
);
app.use("/user", Authrouter);
app.use("/song", Songrouter);
app.use("/", Singerrouter);
app.get("/ping", (req, res) => {
  res.send("pong");
});

Mongoose();
app.listen(3000, () => {
  console.log("listening on port 3000");
});
