const express = require("express");
const path = require("path");

const port = process.env.PORT || 3333;
const app = express();

app.use(express.static(path.join(__dirname, "..", "public")));

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.get("/", (req, res, next) => {
  res.render("index", {
    title: "Live University test",
    items: ["A", "B"],
  });
});

app.listen(port, (err) => {
  console.log(`Server is listening on ${port}`);
});
