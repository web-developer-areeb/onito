const http = require('http');
const app = require('./app');
const mongoose = require('mongoose');

const server = http.createServer(app);
const PORT = process.env.PORT || 8000;

const MONGO_URL = "mongodb+srv://areebahmad:UuHpDOwQGifa95Vp@cluster0.oumxj0t.mongodb.net/?retryWrites=true&w=majority"
mongoose.connection.once('open', () => {
  console.log("MongoDB connection ready!")
});
mongoose.connection.on('error', (err) => {
  console.error(err);
})

async function startServer() {
  await mongoose.connect(MONGO_URL)
  server.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
  });
};
startServer();


