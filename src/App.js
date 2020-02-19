import React, { Component } from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Component/Home";
import Header from "./Component/Header/index"

/**************************** CATÁLOGOS ****************************/ 
import AparelhoJantar from "./Component/Content/AparelhosJantar/AparelhoJantar.js";
import Comoda from "./Component/Content/Comodas/Comoda.js";
import Coral from "./Component/Content/Corais/Coral.js";
import CristalVidro from "./Component/Content/CristaisVidros/CristalVidro.js";
import Espelhos from "./Component/Content/Espelhos/Espelho.js";
import MovelClassico from "./Component/Content/MoveisClassicos/MovelClassico.js";
import Murano from "./Component/Content/Muranos/Murano.js";
import Vasos from "./Component/Content/Vasos/Vasos.js";

class App extends Component {
  render() {
    return (
      <Router>
        <Header />
        <Switch>
          {/****************** BOTÃO MENU E LOGO ************************/}
          <Route path="/" exact component={Home} />
          <Route path="/aparelhos-jantar" component={AparelhoJantar} />
          <Route path="/comodas" component={Comoda} />
          <Route path="/corais" component={Coral} />
          <Route path="/cristais-vidros" component={CristalVidro} />
          <Route path="/espelhos" component={Espelhos} />
          <Route path="/moveis-classic" component={MovelClassico} />
          <Route path="/muranos" component={Murano} />
          <Route path="/Vasos" component={Vasos} />
        </Switch>
      </Router>
    );
  }
}

export default App;
