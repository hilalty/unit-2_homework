const express = require('express')
const app = express()
const port = 3000


app.get('/greeting', (req, res) => {
  res.send('Hello, stranger');
});

app.get('/greeting/:name', (req, res) => {
    res.send(`What's up ` + req.params[`name`] + `? It's so great to see you!`);
});


app.get('/tip/:total/:tipPercantage', (req, res) => {
    res.send(`yout total:  ` + req.params.total + `  your tip percentage:  ` + req.params.tipPercantage);
  });

app.listen(port, () => {
  console.log(`app listening on port ${port}`)
})