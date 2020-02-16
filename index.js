const express = require('express');
const app = express();
const morgan = require('morgan');
const todo = require('./api/todo');

if(process.env.NODE_ENV !== 'test') {
    app.use(morgan('dev'));
}

app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/todo', todo);

app.get('/docs', (req, res) => {
    res.render('index');
})  

module.exports = app;