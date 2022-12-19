const express = require('express');
const pool = require('./config');
const app = express();

// MIDDLEWARE   -----------

// Peticiones que me llegan 
const morgan = require('morgan');
app.use(morgan('tiny'));

// Peticiones que se envian desde servidores diferentes, puertos diferentes. backend - cliente
// Porque tenemos las dos carpetas diferentes corriendo en puertos diferentes

const cors = require('cors');
app.use(cors());

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

//   ------------------------

app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
});

// LEER DATOS DE LA BASE DE DATOS PARA EL CRUD
//  RUTA


// AQUI LLEGA EL AXIOS 
// BASICAMENTE AXIOS PIDE A EXPRESS QUE REALIZE LA PETICION A LA BASE DE DATOS


// NOS CARGA LOS USUARIOS (LA INFORMACION)
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
     pool.query('INSERT INTO users set ?', [user]);
      res.status(200).json({ success:true })
    }
});

// DELETE

    app.delete('/crud/:id', function(req, res) {
        let id = req.params.id;
        console.log('Se envio para eliminarse', id  );
        pool.query('DELETE FROM users where id = ?' , id ); 
        return res.status(200).json();
    });
    
// PUT 

app.put('/crud/:id', function (req, res) {
    let user = req.body
    let id = req.params.id; // BODY = INFORMACION QUE LE PASAMOS PARA QUE AÑADA
    console.log(req.params.id);
    
     pool.query('UPDATE users set ? where id =?' , [user, id] );
    res.status(200).json({ success:true })
    
});

// PREGUNTAR PARAMS Y DE DONDE SE ENVIA EL BODY
