import express from 'express';
import cors from 'cors';
import 'dotenv/config';
import analyzeURLRoute from './routes/analyzeUrlRoute.js';
const app = express();
const PORT = 7000;

app.use(cors());
app.use(express.json());

app.use('/api/analyze-url', analyzeURLRoute);
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
