const mongoose = require("mongoose");

mongoose.connect("mongodb://127.0.0.1:27017/e-commerce").then(()=>{console.log("connection established")});
const ProductSchema = new mongoose.Schema({
  name: String,
  brand: String,
  price: Number,
  category: String,
});
const main = async () => {
  const ProductsModel = mongoose.model("products", ProductSchema);
  let data = new ProductsModel({ name: "m8" });
  let result = await data.save();
  console.log(result);
};

const updateData = async () => {
  const Products = mongoose.model("products", ProductSchema);
  let data = await Products.updateOne(
    { name: "vivo" },
    { $set: { name: "vivo v21" } }
  );
  console.log(data);
};

updateData();
