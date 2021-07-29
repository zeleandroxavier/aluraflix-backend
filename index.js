const customExpress = require('./config/customExpress');
const conexao = require('./infraestrutura/conexao');
const tabelas = require('./infraestrutura/tabelas');
const config = require('config');
const dotenv = require('dotenv');

conexao.connect(erro => {
    if(erro){
        console.log(erro);
    }else{
        console.log('Conectado com sucesso');

        tabelas.init(conexao);
        const app = customExpress();

        app.listen(process.env.port, () => console.log('Servidor rodando na porta 3000'));
        
    }
    
})

