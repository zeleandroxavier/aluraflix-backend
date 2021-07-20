const videosModels = require('../models/videosModels')

module.exports = app => {
    
    app.post('/videos',(req,res) => {
             const video = req.body

            videosModels.adiciona(video, res);
    });
    
    app.get('/videos/:id', (req, res) => {
        console.log(req.params)

        const id = parseInt(req.params.id)

        videosModels.buscarPorId(id,res)
    });

    app.get('/videos', (req, res) => {
        videosModels.lista(res);
    });

    app.put('/videos/:id',(req,res) => {
        const id = parseInt(req.params.id)
        const valores = req.body

        videosModels.altera(id, valores, res)
    });

    app.delete('/videos/:id',(req,res) => {
        const id = parseInt(req.params.id)

        videosModels.deleta(id, res)
    });
}