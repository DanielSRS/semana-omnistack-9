const express = require('express');
const routes = require('./routes')
const mongoose = require('mongoose')
const { password } = require('./password.json')

const app = express();
mongoose.connect(password, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
app.use(express.json());
app.use(routes);

app.listen(3333);