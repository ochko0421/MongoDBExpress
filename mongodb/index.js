const express = require("express");
const cors = require("cors");
const port = 9000;
const app = express();
const mongoose = require("mongoose");

const userRoute = require("./routes/user.routes");
const categoryRoute= require("./routes/category.routes")
const productRoute = require("./routes/product.routes")
const orderRoute= require("./routes/order.route")

const dotenv = require("dotenv")
app.use(cors());
app.use(express.json())
dotenv.config()

mongoose
  .connect(process.env.MONGO_DB_URI)
  .then(() => console.log("Database successfully connected"))
  .catch((err) => console.log(err));

app.use("/api", userRoute);
app.use("/api",categoryRoute);
app.use("/api",productRoute);
app.use("/api",orderRoute)

app.get("/api", (req, res) => {
  res.json("Welcome to API");
});

app.listen(port, () => {
  console.log("Server is running on " + port);
});