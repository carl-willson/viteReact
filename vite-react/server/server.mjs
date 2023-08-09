import foo from './foo.js';
import express from 'express';
// const express = require('express');

const app = express();

const port = 3000;

// Setting up the public directory
app.use(express.static('./'));

app.get('/about', (req, res) => {
    res.sendFile('./index.html', { root: __dirname });
});

app.listen(port, () => console.log(`listening on port ${port}!`));


// export default function () {
// 	console.log(foo);
// }