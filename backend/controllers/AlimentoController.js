const axios = require('axios');
const Alimento = require('../models/Alimento');
const ParseStringAsArray = require('../controllers/utils/parseStringAsArray');
//index, show , store , update , destroy

module.exports = {

async index(request, response){
    const alimentos = await Alimento.find();
    return response.json(alimentos);
},
async cadastrarAlimento(request, response) {
    
    const {nome,
        ingredientes,
        preco,
        foto,
        tipo} = request.body;

    let alimento = await Alimento.findOne({nome});
    if(!alimento){
        console.log(ingredientes);

        const alimentoArray = ParseStringAsArray(ingredientes);
        // console.log(name, avatar_url, bio, github_username);

        /*const location = {
            type: 'Point',
            coordinates: [longitude , latitude]
        }*/
        alimento = await Alimento.create({
            nome,
            ingredientes:alimentoArray,
            preco,
            foto,
            tipo
        });
    }else{
        return response.send("Alimento já cadastrado, favor mudar o nome");
    }
    return response.json(alimento);
},
async atualizarAlimento(req, res) {
    const id = req.body.id;

        Alimento.findById(id, function(err, doc) {  
          if (err) {  
            console.error('error, no entry found');  
          }  
          doc.nome = req.body.nome;  
          doc.ingredientes = req.body.ingredientes;  
          doc.preco = req.body.preco;  
          doc.foto = req.body.foto;  
          doc.tipo = req.body.tipo;  
          doc.save();  
        })  
        //res.redirect('/');   
},
async apagarAlimento(req, res) {
    const id = req.body.id;

        Alimento.findByIdAndRemove(id).exec();  
        res.redirect('/');   
},
}/* nome: String,
    ingredientes: [String],
    preco: Number,
    foto: String,
    tipo: Number*/