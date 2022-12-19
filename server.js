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
    //res.send(`yout total:  ` + req.params.total + `  your tip percentage:  ` + req.params.tipPercantage);
    const x = req.params.total;
    const y = req.params.tipPercantage;
    res.send(`tip: ` + tipCalculator(x,y));
});

app.get('/magic/:question', (req, res) => {
    const responses = [
    "It is certain", 
    "It is decidedly so", 
    "Without a doubt", 
    "Yes definitely",
    "You may rely on it", 
    "As I see it yes", 
    "Most likely", 
    "Outlook good",
    "Yes", 
    "Signs point to yes", 
    "Reply hazy try again", 
    "Ask again later",
    "Better not tell you now", 
    "Cannot predict now", 
    "Concentrate and ask again",
    "Don't count on it", 
    "My reply is no", 
    "My sources say no",
    "Outlook not so good", 
    "Very doubtful"]
    res.send(`You ask  "` + req.params[`question`] + `?"  and Magic Ball says:   ` + randomItemFromArray(responses))
});

app.listen(port, () => {
  console.log(`app listening on port ${port}`)
})

function randomItemFromArray(arr) {
    return arr[Math.floor(Math.random() * arr.length)]
}

function tipCalculator(x,y) {
    return x * y / 100
}