const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const accountSchema = new Schema({ username: String, funds: Number });
const Account = mongoose.model("Account", accountSchema);

module.exports = Account;
