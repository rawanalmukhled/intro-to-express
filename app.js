const express = require("express");
const products = require("./data");
const accounts = require("./account");
const router = require("./api/accounts/routes");
const connectDB = require("./database");
const app = express();
app.use(express.json());
app.use("/api", router);

connectDB();
app.listen(8000, () => console.log("Running on port 8000"));
