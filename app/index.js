const express = require('express');
const app = express();
const morgan = require('morgan');
const cors = require('cors');
const config = require('./config');

//Environment var
/*
const node_env = process.env.NODE_ENV || 'dev';
const PORT = config[node_env].PORT;
*/

//Middlewares
app.use(morgan('dev'));
app.use(express.json());
app.use(cors());

//Server routes
app.use('/api', require('../app/routes/server'));

//Api running port
app.listen(config.PORT,() =>{
    console.log(`Api weather running port: ${config.PORT}`);
})

app.get('/try', (req, res) =>{
    res.status(200).send(':)')
})