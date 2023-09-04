const connectdb = require("./mongodb");

const update = async () => {
  const db = await connectdb();
  const result = await db.updateOne(
    { name: "oppo k10" },
    { $set: { name: "oppo k5" } }
  );
  if (result.acknowledged) {
    console.log("Data updated successfully");
  }
};

update();
