import React, { Component } from "react";
import Cadindex from "../Caduser/index";
import { ListUser, BtnCadastrar } from "./homeComponents";
import $ from "jquery";
/* eslint-disable */

class home extends Component {
  constructor() {
    super();
    this.state = {
      ListaUsuario: [{}],
      cadastrar: false
    };
  }

  // handleLoginClick() {
  //   this.setState(cadastrar);
  // }

  render() {
    if (this.state.cadastrar) {
      return (
        <Cadindex setCadastrar={cadastrar => this.setState({ cadastrar })} />
      );
    } else {
      return (
        <div>
          <BtnCadastrar
            setCadastrar={cadastrar => this.setState({ cadastrar })}
          />
          <ListUser />
        </div>
      );
    }
  }
}

export default home;
