const connectdb = require("./mongodb");

const insertData = async () => {
  const db = await connectdb();
  const result = await db.insertMany([
    {
      name: "oppo f21 pro 5g",
      brand: "oppo",
      price: 25000,
      category: "phone",
    },

    {
      name: "oppo k10",
      brand: "oppo",
      price: 17000,
      category: "phone",
    },
  ]);
};

insertData();
