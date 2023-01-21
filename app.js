//requiero express
const express = require('express');
//requiero path para el send o sendfile
const path = require('path')
//invocando Expess
const app = express();
//numero de puerto
const PORT = 3030;


//Indicacion para ir a buscar los archivo staticos para ser visualisado en html 
app.use(express.static(path.resolve(__dirname ,'./public')) );

//ruta de home
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, './views/home.html'));
});

//ruta de login 
app.get('/login', (req, res) => {
    res.sendFile(path.join(__dirname, './views/login.html'));
});

//ruta de register 
app.get('/register', (req, res) => {
    res.sendFile(path.join(__dirname, './views/register.html'));
});


// Server
app.listen(PORT, () =>console.log(`sERVER LISTEN IN PORT ${PORT} http://localhost:${PORT}`));