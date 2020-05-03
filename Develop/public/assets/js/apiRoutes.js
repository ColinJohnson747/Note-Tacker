var noteContents = require("../../../db/db");
const fs = require("fs");
const util = require("util");
const writeFileAsync = util.promisify(fs.writeFile);

module.exports = function (app) {
  //display notes
  app.get("/api/notes", function (req, res) {
    res.json(db);
  });
  //Make New note
  app.post("/api/notes", function (req, res) {
    let newNote = req.body;

    //create new number for note
    let previousId = db[db.length - 1]["id"];
    let currentId = previousId + 1;
    newNote["id"] = currentId;

    db.push(newNote);

    //writing to json
    writeFileAsync("./db/db.json", JSON.stringify(db));

    res.json(newNote);
  });
};
