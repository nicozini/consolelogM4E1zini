const express = require('express')
const app = express()

const port = 3000;

const path = require('path');
app.use(express.static('public'));


app.listen(port, () => {
    console.log('Example app listening on port '+ port);
});


// -------- Rutas -------- //

//Home
// app.get('/', (req, res) => {
//     res.sendFile(path.join(__dirname, './views/home.html'));
// });

//Registro
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, './views/register.html'));
});

//Inicio de sesión
// app.get('/', (req, res) => {
//     res.sendFile(path.join(__dirname, './views/login.html'));
// });