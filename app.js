const express = require('express')
const app = express()

const port = 3000;

const path = require('path');
app.use(express.static('public'));


app.listen(port, () => {
    console.log('Example app listening on port '+ port);
});

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, './views/home.html'));
});