const Card = require("../models/card");

exports.create = async (req, res) => {
  const card = new Card(req.body);
  const result = await card.save();
  res.send(result);
};

exports.get = async (req, res) => {
  const cards = await Card.find();
  res.send(cards);
};

exports.delete = async (req, res) => {
  const id = req.params.id;
  Card.findByIdAndDelete(id, (err, doc) => {
    if (err) return res.json({ success: false, err });
    return res.json({ success: true, doc });
  });
};
exports.put = async (req, res) => {
  const id = req.params.id;
  Card.findByIdAndUpdate(id, req.body, (err, doc) => {
    if (err) return res.json({ success: false, err });
    return res.json({ success: true, doc });
  });
};
