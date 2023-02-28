const User = require("../models/user.js");

exports.register = async (req, res) => {
  const user = new User(req.body);
  const result = await user.save();
  res.send(result);
};

exports.login = async (req, res) => {
  //TODO: implement login
};

exports.logout = async (req, res) => {
  //TODO: implement logout
};

exports.me = async (req, res) => {
  //TODO: implement me
  if (req.method === "GET") {
    //TODO: implement get
  } else if (req.method === "PUT") {
    //TODO: implement put
  }
};
