const mongoose = require('mongoose');

const AlimentoSchema = new mongoose.Schema({
    nome: String,
    ingredientes: [String],
    preco: Number,
    foto: String,
    tipo: Number
});
module.exports = mongoose.model('Alimento', AlimentoSchema);