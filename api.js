const express = require("express");
const connectdb = require("./mongodb");

const app = express();
const port = 5000;

app.use(express.json());

app.get("/", async (req, res) => {
  let data = await connectdb();
  data = await data.find().toArray();
  // console.log("data", data)
  res.send(data);
});

app.post('/', async (req, res) => {
    const data = await connectdb();
    const result = await data.insertOne(req.body);
   console.log(req.body);
   res.send(result);
})


app.listen(port, (err) => {
  console.log("Listening on port");
});
