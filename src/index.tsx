import React from 'react';
import ReactDOM from 'react-dom';
import Home from './components/pages/home';
import './index.css'

import { BrowserRouter, Switch, Route } from 'react-router-dom'
import CadastroVideo from './components/pages/cadastro/video';
import CadastroCategoria from './components/pages/cadastro/categoria';

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/" component={Home} exact />
      <Route path="/cadastro/categoria" component={CadastroCategoria} />
      <Route path="/cadastro/video" component={CadastroVideo} />
      <Route component={() => (<div>Página Não Encontrada</div>)} />
    </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);
