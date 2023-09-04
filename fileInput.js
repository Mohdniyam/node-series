const fs = require("fs");
const input = process.argv;

console.log(process.argv);
if (input[2] == "add") {
  fs.writeFileSync(input[3], input[4]);
}


