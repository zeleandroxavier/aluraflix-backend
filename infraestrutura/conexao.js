const mysql = require('mysql');

const conexao = mysql.createConnection ({
    host: 'localhost',
    port: '3306',
    user: 'root',
    password: 'Jas1584Desc!@',
    database: 'aluraflix-bd'
});

module.exports = conexao;