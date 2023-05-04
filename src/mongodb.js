// const {MongoClient} = require('mongodb');

// const url = 'mongodb://localhost:27017';
// const client = new MongoClient(url);
// const databaseName = 'patient';

// async function dbConnect() {
//   let result = await client.connect();
//   const db = result.db(databaseName);
//   const collection = db.collection('patient');
//   return collection;
//   // let data = await collection.find({}).toArray();
//   // console.log(data);
// }

// module.exports = {dbConnect}