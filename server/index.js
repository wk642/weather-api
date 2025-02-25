import express from 'express';
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send("Welcome to my Weather app");
});

app.listen(port, () => {
  console.log(`Serving listening at http://localhost:${port}`);
});