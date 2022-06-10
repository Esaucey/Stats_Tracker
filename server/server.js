import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import statsRoutes from './routes/stats.js';
import effectsRoutes from './routes/effects.js';


const app = express();
dotenv.config();

app.use(express.json());
app.use(cors());

app.use('/stats', statsRoutes);
app.use('/effects', statsRoutes);

app.get('/', (req, res) => {
  res.send("Server is running")
})

mongoose.connect(process.env.CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
.then(() => {
  app.listen(PORT, () => console.log(`Server is running on port: ${PORT}`))
})
.catch((error) => {
  console.log(error.message)
})

const PORT = process.env.PORT || 5001;

