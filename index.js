const express = require("express");
const { listings } = require("./data/listings");
const cors = require("cors");

const app = express();

app.use(express.json());

app.use(cors());

const PORT = 5000;

const users = [{ email: "admin@gmail.com", password: "admin" }];

app.get("/listings", async (req, res) => {
  console.log("server hiting");
  res.status(200).json(listings);
});

app.post("/login", async (req, res) => {
  const { email, password } = req?.body;
  console.log(email, password);
  if (!email || !password) {
    return res.json({ error: "Bad Request" }).status(400);
  }
  console.log(email, password);
  const userExist = users?.find(
    (x) => x?.email === email && x?.password === password
  );

  if (userExist) {
    return res.status(200).json({ success: "JWTToken" });
  } else {
    return res.status(400).json({ error: "Invalid credentials" });
  }
});

app.get("/listing/:id", async (req, res) => {
  const data = listings.find((x) => x.id === parseInt(req.params.id));
  res.status(200).json(data);
});

app.listen(PORT, () => {
  console.log("Server running on 5000");
});
