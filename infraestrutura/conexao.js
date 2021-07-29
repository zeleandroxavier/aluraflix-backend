const mysql = require('mysql');
const config = require('config');


const conexao = mysql.createConnection ({
    host: config.get('mysql.host'),
    port: config.get('mysql.porta'),
    user: config.get('mysql.usuario'),
    password: config.get('mysql.senha'),
    database: config.get('mysql.banco-de-dados')
}); 



module.exports = conexao;