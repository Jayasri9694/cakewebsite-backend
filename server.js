import express from 'express';
import dotenv from 'dotenv';
import connectDB from './config/db.js';
import authRoutes from './routes/authRoutes.js';
import cakeRoutes from './routes/cakeRoutes.js';
import reviewRoutes from './routes/reviewRoutes.js';
import cors from "cors";
dotenv.config();
connectDB();

const app = express();
app.use(express.json());
app.use(cors({
    origin: ["https://localhost:5173","https://melodic-mooncake-693776.netlify.app"], // Allow frontend requests
    methods: "GET,POST,PUT,DELETE",
    credentials: true
  }));

app.use('/api/auth', authRoutes);
app.use('/api/cakes', cakeRoutes);
app.use('/api/reviews', reviewRoutes);

app.get('/', (req, res) => res.send('Cake Shop API is running...'));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
