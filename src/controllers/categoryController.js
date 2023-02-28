const Category = require("../models/category");
const { ObjectId } = require("mongoose").Types;

exports.create = async (req, res) => {
  const category = new Category(req.body);
  const result = await category.save();
  res.send(result);
};

exports.get = async (req, res) => {
  const categories = await Category.find();
  res.send(categories);
};
//the following works for both id and name
exports.put = async (req, res) => {
  const identifier = req.params.identifier;
  if (ObjectId.isValid(identifier)) {
    Category.findByIdAndUpdate(identifier, req.body, (err, doc) => {
      if (err) return res.json({ success: false, err });
      return res.json({ success: true, doc });
    });
  } else {
    Category.findOneAndUpdate({ name: identifier }, req.body, (err, doc) => {
      if (err) return res.json({ success: false, err });
      return res.json({ success: true, doc });
    });
  }
};
exports.getOne = async (req, res) => {
  const identifier = req.params.identifier;
  let category;
  if (ObjectId.isValid(identifier)) {
    category = await Category.findOne({ _id: identifier });
  } else {
    category = await Category.findOne({ name: identifier });
  }
  if (!category)
    return res
      .status(404)
      .send("The category with the given ID was not found.");

  res.send(category);
};
exports.delete = async (req, res) => {
  const identifier = req.params.identifier;
  let category;
  if (ObjectId.isValid(identifier)) {
    category = await Category.findOneAndDelete({ _id: identifier });
  } else {
    category = await Category.findOneAndDelete({ name: identifier });
  }
  if (!category)
    return res
      .status(404)
      .send("The category with the given ID was not found.");

  res.send(category);
};
