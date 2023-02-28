module.exports = (app, router) => {
  const userController = require("../controllers/userController.js");
  // User routes
  router.post("/register", userController.register);
  router.post("/login", userController.login);
  router.get("/logout", userController.logout);
  router.get("/me", userController.me);
  //for editting user options like email, password, etc (not implemented yet)
  router.put("/me", userController.update);
  app.use("/users", router);
};
