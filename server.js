const express = require('express');
const path = require('path');

const app = express();
const PORT = Number(process.env.PORT) || 3000;
const ROOT_DIR = __dirname;

app.get('/favicon.ico', (req, res) => {
  res.sendFile(path.join(ROOT_DIR, 'logo.png'));
});

// Root and index routes serve dashboard.html
app.get(['/', '/index.html'], (req, res) => {
  res.sendFile(path.join(ROOT_DIR, 'dashboard.html'));
});

// Serve static assets from root directory
app.use(express.static(ROOT_DIR));

app.listen(PORT, '0.0.0.0', () => {
  console.log(`Server running on http://0.0.0.0:${PORT}`);
});
