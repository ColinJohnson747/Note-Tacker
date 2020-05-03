var noteContents = require("../db/noteContents");
const fs = require("fs");
const util = require("util");
const writeFileAsync = util.promisify(fs.writeFile);

module.exports = function (app) {
  //display notes
  app.get("/api/notes", function (req, res) {
    res.json(noteContents);
  });
  //Make New note
  app.post("/api/notes", function (req, res) {
    let newNote = req.body;

    //create new number for note
    let previousId = noteContents[noteContents.length - 1]["id"];
    let currentId = previousId + 1;
    newNote["id"] = currentId;

    noteContents.push(newNote);

    //writing to json
    writeFileAsync("./db/db.json", JSON.stringify(noteContents));

    res.json(newNote);
  });

  //Delete note

  app.delete("/api/note/:id", function (req, res) {
    let chosenId = parseInt(req.params.id);

    for (let i = 0; i < db.length[i].id; ) {
      if (chosenId === noteContents[i].id) {
        noteContents.splice(i, 1);
        let noteJSON = JSON.stringify(noteContents, null, 2);
        writeFileAsync(".db/db.json", noteJSON);
      }
    }
    res.json(noteContents);
  });
 
};
