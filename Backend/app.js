const express = require('express');

const bodyParser = require('body-parser');

const BooksDetails = require('./route/BooksDetails')

const dbconnect = require('./db/db');

dbconnect()

const app = express();
const port = 3000

app.use(bodyParser.json());

app.use('/books',BooksDetails);

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

