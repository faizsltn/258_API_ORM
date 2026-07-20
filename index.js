const express = require('express')
const app = express();
const PORT = 3000;
const db = require('./models');
const { Result } = require('pg');
app.use(express.json());
app.use(express.urlencoded({
    extended: false
}));
app.listen(PORT, () => {
    console.log('Server started on port 3000');
})
