import React, { Component } from "react";
import $ from "jquery";

class ListUser extends Component {
  constructor() {
    super();
    this.state = {
      ListaUsuario: [{}]
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
    return (
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
    );
  }
}

class BtnCadastrar extends Component {
  handleCadClick() {
    this.props.setCadastrar(true);
  }
  render() {
    return (
      <div>
        <button onClick={() => this.handleCadClick()}>Novo Cadastrar</button>
      </div>
    );
  }
}

export { ListUser, BtnCadastrar };
