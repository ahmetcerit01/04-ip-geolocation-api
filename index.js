import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

const app = express();
const PORT = process.env.PORT || 3004;

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// EJS
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Public
app.use(express.static('public'));

// Routes
app.get('/', (req, res) => {
  res.render('index');
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});