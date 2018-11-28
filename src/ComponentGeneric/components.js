import React, { Component } from "react";

class inputGeneric extends Component {
  constructor() {
    this.super();
    this.state = {

    )};
  }

  render() {
    return (
      <div>
        <input
          name={this.props.name}
          type={this.props.type}
          value={this.state.name}
          onChange={event => this.setState({ name: event.target.value })}
        />
      </div>
    );
  }
}
