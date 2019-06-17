import React from 'react';

// Manipulador de rotas
import { BrowserRouter, Switch, Route } from 'react-router-dom'

// Importando as rotas/páginas
import TesteAPI from '../componentes/Bemobi/TesteAPI';

const Rotas = () => {

  return (
    <BrowserRouter>
      <Switch>
        <Route exact={true} path="/" component={TesteAPI} />
      </Switch>
    </BrowserRouter>
  )
}

export default Rotas;