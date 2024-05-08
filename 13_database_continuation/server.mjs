import express from 'express';
import mongodb from 'mongodb';
import dotenv from 'dotenv';

const PORT = process.env.PORT;

dotenv.config();
const app = express();

//middleware
app.use(express.json());

const MongoClient = mongodb.MongoClient;
const url = process.env.MONGO_URI;

MongoClient.connect(url)
  .then((client) => {
    console.log('Connected to MongoDB');
    const db = client.db('alt_school');
    const usersCollection = db.collection(users);
    app.get('/users', async (req, res) => {
      const users = await usersCollection.find({}).toArray();
      res.status(200).json(users);
    });

    app.post('/users', async (req, res) => {
      const newUser = req.body;
      const result = await usersCollection.insertOne(newUser);
      res.json(result);
    });

    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.log('Error connecting to MongoDB: ', err);
  });
