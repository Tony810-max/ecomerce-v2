const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const morgan = require("morgan");
const mongoose = require("mongoose");
const cors = require("cors");
const authJwt = require("./helper/jwt");
const errorHandler = require("./helper/error-handler");

require("dotenv/config");

//cors
app.use(cors());
app.options("*", cors());

// jwt middleware
app.use(authJwt());
app.use(errorHandler);
app.use("/public/uploads", express.static(__dirname + "/public/uploads"));

const port = process.env.PORT || 3001;

//define router from routers
const productRouter = require("./routers/products");
const categoryRouter = require("./routers/categories");
const orderRouter = require("./routers/orders");
const userRouter = require("./routers/users");
const cartRouter = require("./routers/carts");

app.use(bodyParser.json());
app.use(morgan("tiny"));

const api = process.env.API_URL;

//Router
app.use(`${api}/products`, productRouter);
app.use(`${api}/categories`, categoryRouter);
app.use(`${api}/orders`, orderRouter);
app.use(`${api}/users`, userRouter);
app.use(`${api}/carts`, cartRouter);

//connect mongooose
mongoose
  .connect(process.env.CONNECTION_STRING, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    dbName: "ecommercv2-db",
  })
  .then(() => {
    console.log("MongoDB connected successfully");
  })
  .catch((err) => console.log(err));

//run server
app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
