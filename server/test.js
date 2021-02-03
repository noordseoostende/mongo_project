var models = require("./server.js").models;

// var toSave = [
//   { name: "Fernando", email: "nibelung@mail.com" },
//   { name: "Fernando1", email: "nibelungot@mail.com" },
//   { name: "Fernando2", email: "nibelungop@mail.com" },
//   { name: "Fernando3", email: "nibelungap@mail.com" },
//   { name: "Fernando4", email: "nibelungen@mail.com" },
//   { name: "Fernando5", email: "nibelungak@mail.com" },
//   { name: "Fernando6", email: "nibelungek@mail.com" },
//   { name: "Fernando7", email: "nibelungil@mail.com" },
//   { name: "Fernando8", email: "nibelungon@mail.com" },
// ];

// toSave.map((obj) => {
//   models.Profile.create(obj, (err, created) => {
//     console.log("Created?", created);
//   });
// });
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

var filter = {
  where: {
    email: { like: "nibelung" },
  }, // kind of liek MySQL Where Clause
  order: "id ASC", // Order by: 'field direction'
  limit: 10,
  skip: 0,
  fields: {
    email: true,
  },
};

// Profile.Posts.Image

models.Profile.findById(
  "60198d1c7e81d32ce3161e46",
  { include: "Posts" },
  (err, found) => {
    console.log("Found?", err, found);
    Profile.Posts.destroyAll({ date: { lte: new Date("2021-02-02") } });
  }
);
