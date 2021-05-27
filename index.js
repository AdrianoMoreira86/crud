const express = require('express');
const app = express();
app.use(express.json());

const port = 3000;

const usuarioAdriano = [{
    id: 1,
    nome: 'Adriano',
    idade: 35
}];

const usuarios = [usuarioAdriano];

app.get('/usuarios', (req, res) => {
    res.json(usuarios);
});

app.listen(3000, () => {
    console.log('Server is up and running on port ${port}');
});