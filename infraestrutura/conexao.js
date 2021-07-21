const mysql = require('mysql');

/*const conexao = mysql.createConnection ({
    host: 'localhost',
    port: '3306',
    user: 'root',
    password: 'Jas1584Desc!@',
    database: 'aluraflix-bd'
});*/

const conexao = mysql.createConnection ({
    host: 'www.easyweb.dev.br',
    port: '3306',
    user: 'easywe34_alurafl',
    password: '123mudar!@',
    database: 'easywe34_aluraflix'
});



module.exports = conexao;