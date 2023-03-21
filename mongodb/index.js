const express = require("express");
const cors = require("cors");
const port = 8000;
const app = express();
const mongoose = require("mongoose");

const userRoute = require("./routes/user.routes");
const categoryRoute= require("./routes/category.routes")
const productRoute = require("./routes/product.routes")
app.use(cors());
app.use(express.json())

mongoose
  .connect(
    "mongodb+srv://ochko:pwtKM8HtWBo8JeR6@cluster0.y9udncp.mongodb.net/Eshop"
  )

  .then(() => console.log("Database successfully connected"))
  .catch((err) => console.log(err));

app.use("/api", userRoute);
app.use("/api",categoryRoute);
app.use("/api",productRoute)

app.get("/api", (req, res) => {
  res.json("Welcome to API");
});

app.listen(port, () => {
  console.log("Server is running on " + port);
});