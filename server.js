import express from 'express';
import minimist from 'minimist';
import { rps, rpsls } from './lib/a03-madiali/lib/rpsls.js';

const app = express();
var argv = minimist(process.argv.slice(2));
const PORT = argv.port ? argv.port : 5000;

app.listen(PORT, (err) => {
    if (err) console.log(err);
});

app.get('/app', (req, res) => {
    res.send('200 OK');
})

app.get('/app/rps', (req, res) => {
    res.send(rps());
})

app.get('/app/rpsls', (req, res) => {
    res.send(rpsls());
})

app.get('*', (req, res) => {
    res.send('404 NOT FOUND');
})