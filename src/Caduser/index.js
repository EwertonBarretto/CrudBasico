import React, { Component } from 'react';
import '../css/main.css';

class CadUser extends Component{

    render() {
        return(
            <div className='wrap-contact3'>
                <label>
                    Nome:
                    <input type='text' name="inptNome"/>
                </label>
                <br/>
                <label>
                    Email:
                    <input type='text' name="inptEmail"/>
                </label>
                <br/>
                <input className='contact3-form-btn' type="submit" value="Submit" 
                onClick={() => alert("AQUIEEIEI")} />
            </div>
        );
    }
};

export default CadUser;