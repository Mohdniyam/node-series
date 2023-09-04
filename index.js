const connectdb = require('./mongodb');

// console.log(connectdb);

const main = async () => {
    const res = await connectdb();
    const data = await res.find().toArray();
    console.log(data);
}
main();