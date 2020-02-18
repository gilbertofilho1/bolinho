import React , {useEffect, useState} from 'react';
//import logo from './logo.svg';
import api from './services/api';
import './App.css';
import './global.css';
import './SideBar.css';
import './Main.css';

import { Link } from 'react-router-dom';


function Catalogo() {
  
  const [alimentos, setAlimentos] = useState([]);
  let [nome, setNome] = useState('');
  let [ingredientes, setIngredientes] = useState('');
  let [preco, setPreco] = useState('');
  let [foto, setFoto] = useState('');
  let [tipo, setTipo] = useState('');

  useEffect(()=> {
    async function loadAlimentos(){
      const response = await api.get('/alimentos');
      setAlimentos(response.data);
    }
    loadAlimentos();
    
  },[]);

  async function handleAddAlimento(e){
    e.preventDefault();
     
    const response = await api.post('/alimentos', {
      nome,
      ingredientes,
      preco,
      foto,
      tipo
    });
    
    alert(response);
    setNome('');
    setIngredientes('');
    setPreco('');
    setFoto('');
    setTipo('');
  }



  return (
    <div id="App">
     
      <aside>
      <strong>Cadastrar</strong>
        <form onSubmit={handleAddAlimento}>
          <div className = "input-block">
            <label htmlFor="nome" id="nome" >Nome</label>
            <input type="text" id="nome" required
                  onChange= {e => setNome(e.target.value)}/>
          </div>
          <div className = "input-block">
            <label htmlFor="preco" id="preco" >Preco</label>
            <input type="text" id="preco" required
                  onChange= {e => setPreco(e.target.value)}/>
          </div>
          <div className = "input-block">
            <label htmlFor="tipo" id="tipo" >Tipo</label>
            <input type="text" id="tipo" required
                  onChange= {e => setTipo(e.target.value)}/>
          </div>
          <div className = "input-block">
            <label htmlFor="ingredientes" id="ingredientes" >Ingredientes</label>
            <input type="text" id="ingredientes" required
                  onChange= {e => setIngredientes(e.target.value)}/>
          </div>
          <div className = "input-block">
          <label htmlFor="foto" id="foto" >Foto</label>
          <input type="text" id="foto" required
                onChange= {e => setFoto(e.target.value)}/>
           </div>
          <button type="submit">Salvar</button>
      </form>
    </aside>

    <main>
        <ul>
          {alimentos.map(
            alimento => (
              <li key = {alimento._id} className="dev-item">
                
                
              </li>
            )
          )}
         
        </ul>
      </main>

    </div>
  );
}

export default Catalogo;
