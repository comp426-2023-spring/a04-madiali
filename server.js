import express from 'express';
import minimist from 'minimist';
import { rps, rpsls } from './lib/rpsls.js';

const app = express();
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

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

app.get('/app/rps/play', (req, res) => {
    res.send(rps(req.body.shot));
})

app.get('/app/rpsls/play', (req, res) => {
    res.send(rpsls(req.body.shot));
})

app.get('/app/rps/play/:shot', (req, res) => {
    res.send(rps(req.params.shot));
})

app.get('/app/rpsls/play/:shot', (req, res) => {
    res.send(rpsls(req.params.shot));
})

app.get('*', (req, res) => {
    res.send('404 NOT FOUND');
})