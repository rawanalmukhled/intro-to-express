const req = require("express/lib/request");
const res = require("express/lib/response");
const accounts = require("../../account");
const Account = require("../../model/Account");

// const getAllProducts = (req, res) => {
//   res.status(200).json(products);
// };

const getAllAccounts = (req, res) => {
  Account.res.status(200).json(accounts);
};

const addAccount = (req, res) => {
  const newUserId = accounts[accounts.length - 1].id + 1;
  const { username } = req.body;
  if (!username) return res.status(400).json("PLEASE ENTER A USERNAME");
  const newAccount = {
    id: newUserId,
    username: username,
    funds: 0,
  };

  accounts.push(newAccount);
  res.status(201).json(accounts);
};

const deleteAccount = (req, res) => {
  const { id } = req.params;

  const account = accounts.find((account) => {
    if (account.id == id) return true;
  });

  if (!account)
    return res.status(404).json(`account not found with this id: ${id}`);

  const Accounts = accounts.filter((account) => account.id != id);

  return res.status(200).json(Accounts);
};

const updateAccount = (req, res) => {
  const { username, funds } = req.body;
  const account = accounts.find((account) => {
    return account.id == req.params.id;
  });
  if (username) {
    account.username = username;
  }
  if (funds) {
    account.funds = funds;
  }

  res.status(200).json(account);
};

module.exports = { getAllAccounts, addAccount, deleteAccount, updateAccount };
