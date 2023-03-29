const express = require('express');

const loginRouter = require('./routes/login');
const homeRouter = require('./routes/home');

const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({extended:false}));

app.use(loginRouter);
app.use(homeRouter);

app.use((req, res, next) => {
    res.status(404).send('<h1>Error 404 : Page Not Found</h1>');
});

app.listen(4000);