const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const BooksDetails = require('./route/BooksDetails')
const User = require('./route/Users')
const RentDetails = require('./route/Rent')

const dbconnect = require('./db/db');

dbconnect()

const app = express();
app.use(cors());
const port = 3000

app.use(bodyParser.json());

app.use('/books',BooksDetails);
app.use('/users',User);
app.use('/rent',RentDetails);

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

