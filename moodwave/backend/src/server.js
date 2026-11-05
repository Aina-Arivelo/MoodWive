// Doit être importé en premier : les modules suivants lisent process.env
// au moment de leur évaluation (imports ESM hissés avant le corps du fichier).
import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import playlistRoutes from './routes/playlist.routes.js';

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

app.use('/api/playlist', playlistRoutes);

app.get('/', (req, res) => {
  res.json({ message: 'MoodWave API is running' });
});

app.listen(PORT, () => {
  console.log(`Backend MoodWave sur http://localhost:${PORT}`);
});