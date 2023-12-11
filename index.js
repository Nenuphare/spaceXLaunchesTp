const express = require('express');
const app = express();
const port = 3000;
/*
    app.get('/', (req, res) => {
        res.send('Hello les b3!');
        res.status(200);
        req.end('Home');
    })
    app.get('/posts', (req, res) => {
        res.send("Liste des articles");
        res.status(200);
    })
    app.get('/posts/:id', (req, res) => {
        res.send(`Article ${req.params.id}`);
        res.status(200);
    })*/

const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/apiSpaceX');

app.use(express.urlencoded());
app.use(express.json());


app.listen(port, () => {
  console.log(`Listening on port: ${port}`)
});