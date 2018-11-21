import React, { Component } from "react";
import Cadindex from "../Caduser/index";
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

  getList() {
    if (!this.state.cadastrar) {
      $.ajax({
        url: "http://cdc-react.herokuapp.com/api/autores/",
        dataType: "json",
        success: function(resposta) {
          this.setState({ ListaUsuario: resposta });
        }.bind(this)
      });
    }
  }

  componentDidUpdate() {
    this.getList();
  }

  componentWillMount() {
    this.getList();
  }

  render() {
    if (this.state.cadastrar) {
      return (
        <Cadindex setCadastrar={cadastrar => this.setState({ cadastrar })} />
      );
    } else {
      return (
        <div>
          <div>
            <button onClick={() => this.setState({ cadastrar: true })}>
              Novo Cadastr
            </button>
          </div>
          <div>
            <table>
              <thead>
                <tr>
                  <th>Nome</th>
                  <th>email</th>
                </tr>
              </thead>
              <tbody>
                {this.state.ListaUsuario.map((user: any) => (
                  <tr key={user.id}>
                    <td>{user.nome}</td>
                    <td>{user.email}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      );
    }
  }
}

export default home;
