module.exports = (app) => {
  const cardController = require("../controllers/cardController.js");

  const router = require("express").Router();

  router.post("/", cardController.create);
  router.get("/", cardController.get);
  router.delete("/:id", cardController.delete);
  router.put("/:id", cardController.put);

  app.use("/cards", router);
};
