const { MongoClient } = require('mongodb');

const url = 'mongodb://127.0.0.1:27017';
const client = new MongoClient(url);

console.log(client);

const dbName = 'e-commerce';

async function getData() {
    const res = await client.connect();
    const db = res.db(dbName);
    return db.collection('products');

    // const response = await collection.find({}).toArray();
    // console.log("hello world");
    // console.log("data", response);
}

module.exports = getData;