import React, { Component } from "react";
//import { cadastrarUser } from "../Functions/AjaxFunc";
import { InputGeneric } from "../ComponentGeneric/components";
import $ from "jquery";

class FormularioCad extends Component {
  constructor(props) {
    super(props);
    this.state = { name: "", email: "" };
  }

  cadastrarUser() {
    $.ajax({
      url: "http://cdc-react.herokuapp.com/api/autores/",
      dataType: "json",
      contentType: "application/json",
      type: "post",
      data: JSON.stringify({
        nome: this.state.name,
        email: this.state.email,
        senha: "123"
      }),
      success: (resposta: any) => {
        console.log("sucesso");
      },
      error: () => {
        console.log("erro");
      }
    });
  }

  handleConfirmClick() {
    this.cadastrarUser(this);

    this.setState({ name: "", email: "" });
    this.handleClick();
  }

  handleClick() {
    this.props.setCadastrar(false);
  }

  render() {
    return (
      <div className="wrap-contact3">
        <InputGeneric
          label="Nome:"
          type="text"
          name="inptNome"
          value={this.state.name}
          onChange={event => this.setState({ name: event.target.value })}
        />
        <br />
        <InputGeneric
          label="Email:"
          type="text"
          name="inptEmail"
          value={this.state.email}
          onChange={event => this.setState({ email: event.target.value })}
        />
        <br />
        <input
          className="contact3-form-btn"
          type="submit"
          value="Submit"
          onClick={this.handleConfirmClick.bind(this)}
        />
        <button onClick={this.handleClick.bind(this)}>Voltar</button>
      </div>
    );
  }
}

export default FormularioCad;
