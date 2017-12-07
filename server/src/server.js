const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const cors = require('cors');
const mongoapi = require('./mongoapi');

const app = express();
app.use(morgan('combined'));
app.use(bodyParser.json());
app.use(cors());


app.post('/newNote', (req, res) => {
    var info = req.body
    mongoapi.saveTodo(info, (err, doc) => {
        if (err) {
            res.status(400).send(err);
        } else {
            res.send(doc);
        }
    });
});

app.get('/todos', (req, res) => {
    mongoapi.getTodos((err, todos) => {
        if (err) {
            res.status(400).send(err);
        } else {
            res.send({ data: todos });
        }
    });
});

app.listen(3000, () => {
    console.log('listening in port 3000')
});