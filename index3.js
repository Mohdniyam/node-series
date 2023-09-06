const express = require("express");
require("./config");

const Prod = require("./product");
const app = express();
const port = 5000;

app.use(express.json());

app.post("/create", async (req, res) => {
  let data = Prod(req.body);
  let result = await data.save();
  console.log(result);
  res.send(req.body);
});
app.delete("/delete/:_id", async (req, res) => {
  console.log(req.params);
  const data = await Prod.deleteOne(req.params);
  res.send(data);
});

app.put("/update/:_id", async (req, res) => {
  console.log(req.params);
  const data = await Prod.updateOne(req.params, { $set: req.body });
  res.send(data);
});

app.get("/search/:key", async (req, res) => {
  console.log(req.params.key);
  let data = await Prod.find({ $or: [{ name: { $regex: req.params.key } },
    { brand: { $regex: req.params.key } }
] });
  res.send(data);
});

app.listen(port);
