class Tabelas {
    init(conexao){
        this.conexao = conexao;
        this.criarAtendimentos();
    }

    criarAtendimentos(){
        const sql = `CREATE TABLE IF NOT EXISTS videos (
                     id int NOT NULL AUTO_INCREMENT,
                     titulo varchar(50) NOT NULL ,
                     descricao varchar(200) NOT NULL,
                     url varchar(50) NOT NULL,
                     PRIMARY KEY(ID))`;
                     
        this.conexao.query(sql, erro => {
            if(erro){
                console.log(erro);
            }else{
                console.log('commando de criação de tabela executado com sucesso')
            }
        })
    }
}

module.exports = new Tabelas;