import React, { Component } from "react";
import "../css/main.css";
import "./formComponent";
import FormularioCad from "./formComponent";

// import $ from "jquery";
// eslint-disable-next-line
class CadUser extends Component {
  handleClick(cadastrar) {
    this.props.setCadastrar(cadastrar);
  }

  render() {
    return (
      <FormularioCad setCadastrar={cadastrar => this.handleClick(cadastrar)}/>
    );
  }
}

export default CadUser;
