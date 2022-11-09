const express = require('express');
const pool = require('./config');
const app = express();

// MIDDLEWARE   -----------

const morgan = require('morgan');
app.use(morgan('tiny'));

const cors = require('cors');
app.use(cors());

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

//   ------------------------

app.get('/', function (req, res) {
    res.send('Hello World!');
});

app.post('/signup', function (req, res) {
    res.send('');
});

app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
});


// --------------------------------------------------------


// LEER DATOS DE LA BASE DE DATOS PARA EL CRUD
//  RUTA

app.get('/crud', async function (req, res) {
    const users = await pool.query('SELECT * FROM users');
    return res.status(200).json(users);
});

// CREAR 

app.post('/crud', function (req, res) {
    let user = req.body; // BODY = INFORMACION QUE LE PASAMOS PARA QUE AÑADA
    console.log(req.body);

    if (user.password !== user.password2) {
        res.status(400);
    }else{
      delete user.password2
      let result = pool.query('INSERT INTO users set ?', [user]);
      res.status(200).json({ success:true })
    }

// ELIMINAR USUARIO

app.delete('/crud', function (req, res) {
    console.log(' SE ENVIO PARA ELIMINARSE BB ')
    
    // let result = pool.query('DELETE FROM users where USER_ID = ', user.id )
    // res.status(200).json({ success:true })
})
    
});
