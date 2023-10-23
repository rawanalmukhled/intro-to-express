const express = require("express");
const products = require("./data");
const accounts = require("./account");
const router = require("./api/accounts/routes");
const app = express();
app.use(express.json());
app.use("/api", router);

app.listen(8000, () => console.log("Running on port 8000"));
