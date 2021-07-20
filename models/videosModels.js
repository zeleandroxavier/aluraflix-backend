const conexao = require('../infraestrutura/conexao');

class videosModels {
    adiciona(video, res){
        const sql = 'INSERT INTO videos SET ?';
        conexao.query(sql, video, (erro => {
            if(erro){
                res.status(400).json(erro);
            }else{
                res.status(201).json(video);
            }
            
        }))
    }

    lista(res){
        const sql = 'SELECT * FROM videos'

        conexao.query(sql, (erro, resultados) =>{
            if(erro) {
                res.status(400).json(erro)
            } else {
                res.status(200).json(resultados)
            }
        })
    }

    buscarPorId(id, res){
        const sql = `SELECT * FROM videos where id = ${id}`

        conexao.query(sql, (erro, resultados) => {
            const video = resultados[0]

            if(erro){
                res.status(400).json(erro)
            } else {
                res.status(200).json(video)
            }
        })
    }

    altera(id, valores, res){
        const sql = 'UPDATE videos SET ? WHERE id =?'
        
        conexao.query(sql, [valores, id], (erro, resultados) => {

            if(erro){
                res.status(400).json(erro)
            } else {
                res.status(200).json({...valores, id})
            }
        })
    }
    deleta(id, res){
        const sql = `DELETE FROM videos WHERE id = ${id}`

        conexao.query(sql, (erro, resultados) => {
            if(erro){
                res.status(400).json(erro)
            } else {
                res.status(200).json(resultados)
            }
        })

    }

}

module.exports = new videosModels