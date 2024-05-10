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

// Create authors
const authors = [
  { artist: "Artist1", songs: [] },
  { artist: "Artist2", songs: [] },
];

Author.insertMany(authors)
  .then((createdAuthors) => {
    console.log("Authors created:", createdAuthors);

    // Create songs
    const songs = [
      {
        song: "Song1",
        artist: createdAuthors[0]._id,
        genre: "Genre1",
        image: "image1.jpg",
      },
      {
        song: "Song2",
        artist: createdAuthors[1]._id,
        genre: "Genre2",
        image: "image2.jpg",
      },
    ];

    Song.insertMany(songs)
      .then((createdSongs) => {
        console.log("Songs created:", createdSongs);
      })
      .catch((error) => {
        console.error("Error creating songs:", error);
      });
  })
  .catch((error) => {
    console.error("Error creating authors:", error);
  });
app.listen(3000, () => {
  console.log("listening on port 3000");
});
