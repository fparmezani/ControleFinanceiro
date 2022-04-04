const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const PORT = process.env.PORT || 8080;
const nodemailer = require('nodemailer');
var forceSsl = require('force-ssl-heroku');

const app = express();
app.use(forceSsl);

app.use(cors({ origin: '*' }));
app.use(bodyParser.json());

app.use(express.static(__dirname + '/dist/controlefinanceiro'));

app.get('/*', (req, res) => {
    res.sendFile(__dirname + '/dist/controlefinanceiro/index.html');
});

app.listen(PORT, () => {
    console.log('Servidor iniciado na porta: ' + PORT);
});
