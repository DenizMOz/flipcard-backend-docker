module.exports = (app, router) => {
  const categoryController = require("../controllers/categoryController.js");
  // Category routes
  router.get("/", categoryController.get);
  router.get("/:identifier", categoryController.getOne);
  router.post("/", categoryController.create);
  router.delete("/:identifier", categoryController.delete);
  router.put("/:identifier", categoryController.put);
  app.use("/categories", router);
};
