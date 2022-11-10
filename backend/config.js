const mysql = require('mysql');
const { promisify } = require('util');

const pool = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "",
    database: "02-crud",
});

// Comprobar si se conecta

pool.getConnection((err, connection) => {
    if (err) {
        if (err.code === 'PROTOCOL_CONNECTION_LOST') {
            console.error('Database connection was closed.');
        }
        if (err.code === 'ER_CON_COUNT_ERROR') {
            console.error('Database has to many connections');
        }
        if (err.code === 'ECONNREFUSED') {
            console.error('Database connection was refused');
        }
    } else {
        console.log('DB is Connected');
    }

    if (connection) connection.release();

    return;
});

// Promisify Pool Querys
pool.query = promisify(pool.query);

pool.on('error', function (err) {
    console.error(err); // 'ER_BAD_DB_ERROR'
});

module.exports = pool;
