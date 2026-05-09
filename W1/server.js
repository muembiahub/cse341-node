const express = require('express');
const cors = require('cors');
const { connectDB, client } = require('./db/connect');

require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 8080;

app.use(cors()); // ✅ THIS FIXES EVERYTHING

connectDB();

app.get('/professional', async (req, res) => {
  try {
    const database = client.db('cse341');
    const requestsCollection = database.collection('profile');

    const profile = await requestsCollection.findOne();

    res.status(200).json(profile);

  } catch (error) {
    console.error("Error fetching requests:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});