module.exports = (app, router) => {
  const cardController = require("../controllers/cardController.js");
  // Card routes
  router.post("/", cardController.create);
  router.get("/", cardController.get);
  router.delete("/:id", cardController.delete);
  router.put("/:id", cardController.put);
  app.use("/cards", router);
};
