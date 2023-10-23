const express = require("express");
const {
  getAllAccounts,
  addAccount,
  deleteAccount,
  updateAccount,
} = require("./controllers");

const router = express.Router();

// router.get("/products", getAllProducts);

router.get("/accounts", getAllAccounts);

router.post("/accounts", addAccount);

router.delete("/accounts/:id", deleteAccount);

router.put("/accounts/:id", updateAccount);

module.exports = router;
