import React, { Component } from 'react';
import index from '../Caduser/index';


class home extends Component {
    constructor(props){
        super(props);
        this.cad = index.bind(this);
    }

    render() {
        return(
        <div> 
            <button 
                onClick={this.cad}>
                Novo Cadastr
            </button>
        </div>
        );
    }
}

export default home;