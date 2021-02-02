var models = require("./server.js").models;

var toSave = [
  { name: "Fernando", email: "nibelung@mail.com" },
  { name: "Fernando1", email: "nibelungot@mail.com" },
  { name: "Fernando2", email: "nibelungop@mail.com" },
  { name: "Fernando3", email: "nibelungap@mail.com" },
  { name: "Fernando4", email: "nibelungen@mail.com" },
  { name: "Fernando5", email: "nibelungak@mail.com" },
  { name: "Fernando6", email: "nibelungek@mail.com" },
  { name: "Fernando7", email: "nibelungil@mail.com" },
  { name: "Fernando8", email: "nibelungon@mail.com" },
];

// models.Profile.findOrCreate({ name: "Higgins3" }, (err, profile) => {
//   if (err) {
//     console.log("Hier is een fout opgetreden was", err);
//   } else if (profile) {
//     profile.email = "joshua@sintsimon.be";
//     profile.save((ue, updated) => {
//       console.log("Updated?", updated);
//     });
//   }
// });
