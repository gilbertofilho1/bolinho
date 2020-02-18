const { Router } = require('express');

const routes = Router();
const AlimentoController = require('../controllers/AlimentoController')
const SearchController = require('../controllers/SearchController')
// routes.post('/alimentos', (request, response) => {
//     return response.json({message: 'Hello Velho'});
// });
routes.post('/alimentos', AlimentoController.cadastrarAlimento);
routes.get('/alimentos' , AlimentoController.index);
routes.get('/search' , SearchController.index);
routes.post('/edit' , AlimentoController.atualizarAlimento);
routes.post('/delete' , AlimentoController.apagarAlimento);
//routes.get('/edit' , AlimentoController.atualizarAlimento);


module.exports = routes;