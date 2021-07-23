const mysql = require('mysql');

/*const conexao = mysql.createConnection ({
    host: 'localhost',
    port: '3306',
    user: 'root',
    password: 'Jas1584Desc!@',
    database: 'aluraflix-bd'
});*/

const conexao = mysql.createConnection ({
    host: 'mysql.easyweb.dev.br',
    port: '3306',
    user: 'easyweb',
    password: '1q2wS3251',
    database: 'easyweb' 
}); 



module.exports = conexao;