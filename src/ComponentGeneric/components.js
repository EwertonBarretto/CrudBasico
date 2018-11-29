import React, { Component } from "react";

class InputGeneric extends Component {
  render() {
    return (
      <div>
        <label>
          {this.props.label}
          <input
            name={this.props.name}
            type={this.props.type}
            value={this.props.value}
            onChange={this.props.onChange}
          />
        </label>
      </div>
    );
  }
}

export { InputGeneric };
