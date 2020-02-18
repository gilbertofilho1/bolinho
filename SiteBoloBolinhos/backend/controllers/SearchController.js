const axios = require('axios');
const Alimento = require('../models/Alimento');
const ParseStringAsArray = require('./utils/parseStringAsArray');
//index, show , store , update , destroy

module.exports = {


    async index(request, response){
        const {nome, ingredientes} = request.query;
        
        const alimentosArray = ParseStringAsArray(ingredientes);
        console.log(alimentosArray);
        const listaAlimentos = await Alimento.find( { ingredientes: { $in: alimentosArray } });
        // const listaAlimentos = await Alimento.find({"ingredientes": { $in: ["Chocolate"] }});
        // // console.log(techsArray);
         return  response.json(listaAlimentos);
    }
}
