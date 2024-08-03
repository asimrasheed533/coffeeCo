const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const userRouter = require("./router/userRouter");
const category = require("./router/categories");
const product = require("./router/Products");
const dotenv = require("dotenv");
const morgan = require("morgan");

dotenv.config();

// api config
const app = express();
const port = process.env.PORT || 8000;

//middleware
app.use(
  express.json({
    limit: "50mb",
  })
);
app.use(cors());
app.use(morgan("dev"));

// db config
mongoose.connect(process.env.MONGO_URL).then(() => {
  console.log("Database connected");
});
// api endpoints
app.get("/", (req, res) => {
  res.status(200).json({
    message: "welcome to the api",
  });
});
app.use("/api/users", userRouter);
app.use("/api/categories", category);
app.use("/api/products", product);

//use morgen
app.use(morgan("dev"));

// listener
app.listen(port, () =>
  console.log(`Server is running on port http://localhost:${port}/`)
);
