const express = require("express");
const { listings } = require("./data/listings");
const cors = require("cors");

const app = express();

app.use(cors());

const PORT = 5000;

app.get("/listings", async (req, res) => {
  console.log("server hiting");
  res.status(200).json(listings);
});

app.get("/listing/:id", async (req, res) => {
  const data = listings.find((x) => x.id === parseInt(req.params.id));
  res.status(200).json(data);
});

app.listen(PORT, () => {
  console.log("Server running on 5000");
});
