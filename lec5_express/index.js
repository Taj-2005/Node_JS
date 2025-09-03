const express = require('express');
const figlet = require('figlet')
const app = express();

app.use(express.json());

app.get('/home/:id/:name', (req, res) => {
  console.log(req.query);
  console.log(req.params);

  const text = req.params.name;

  figlet(text, (err, data) => {
    if (err) {
      console.error('Figlet error:', err);
      return res.status(500).send('Something went wrong');
    }

    res.setHeader('Content-Type', 'text/plain');
    res.status(200).send(data);
  });
});

app.listen(3000, () => {
    console.log('Server running at http://localhost:3000/');
});
