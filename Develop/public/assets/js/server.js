// Dependencies
// =============================================================
var express = require("express");
var path = require("path");
var db = require("../../../db/db.json");
// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

require("./apiRoutes")(app);
require("./htmlRoutes")(app);

app.listen(PORT, () => {
  console.log(`App listening on PORT:${PORT}`);
});
