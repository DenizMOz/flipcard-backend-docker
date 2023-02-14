// imports
const dotenv = require("dotenv");
const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const app = express();
dotenv.config();
const port = process.env.PORT || 3001;
//body parser stuff
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
//mongoose stuff
mongoose.set("strictQuery", true);
mongoose
  .connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Database connection established."))
  .catch(console.log);

mongoose.connection.on("error", (err) => {
  console.log("Mongoose default connection error: " + err);
});
process.on("unhandledRejection", (reason, p) => {
  console.log("Unhandled Rejection at: Promise", p, "reason:", reason);
});
//weird router thing to make it work
require("./routes/cards")(app);
//listen
app.listen(port, () => {
  console.log(`Now listening on port ${port}`);
});
