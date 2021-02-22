//Importar as dependências
import React, { Component } from 'react';
//import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

//Importar as páginas
import Home from './pages/Home';
import CadastroDeProduto from './pages/CadastroDeProduto';
import ListaDeProdutos from './pages/ListaDeProdutos';
import DetalhesDoProduto from './pages/DetalhesDoProduto';

export class Routes extends Component {
  render() {
    return (
      //<main className="container">
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={Home} />  
            <Route path="/cadastrodeproduto" component={CadastroDeProduto} />
            <Route path="/listadeprodutos" component={ListaDeProdutos} />
            <Route path="/detalhesdoproduto" component={DetalhesDoProduto} />
           </Switch>
        </BrowserRouter>
      //</main>
    )
  }
}

export default Routes;
