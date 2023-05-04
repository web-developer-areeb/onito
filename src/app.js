const express = require('express');
const path = require('path');
const cors = require('cors');
const {patientsRouter} = require('./routes/patient/patient.router');
// const {dbConnect} = require('./mongodb');

const app = express();



// const main = async () => {
//   let data = await dbConnect();
//   data = await data.find({}).toArray();
//   console.log("Areeb", data);
// };

// main();

app.use(cors({
  origin: 'http://localhost:3000'
}));
app.use(express.json());
app.use(express.static(path.join(__dirname, '..', 'public')));
app.use(patientsRouter);
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'public', 'index.html'))
});

module.exports = app;