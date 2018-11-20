import React, { Component } from "react";
import index from "../Caduser/index";
/* eslint-disable */

class home extends Component {
  constructor() {
    super();
    this.state = {
      ListaUsuario: [
        {
          nome: "carlinho",
          email: "c@linhos.com"
        }
      ]
    };
  }

  render() {
    return (
      <div>
        <div>
          <button onClick={() => alert("uhuhu")}>Novo Cadastr</button>
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
                <tr>
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

export default home;
