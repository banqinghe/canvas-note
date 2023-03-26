import express from 'express';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const port = 3111;

// access -> /static/00.canvas-api/index.html

app.use('/static', express.static(path.resolve(__dirname, 'notes')));

app.listen(port, () => {
  console.log(`App is live at http://localhost:${port}`);
});
