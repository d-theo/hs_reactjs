import React, { Component } from 'react';
import {getPrimeNumber} from "../../core/prime.service";

class Prime extends Component {
    constructor(props) {
        super(props);
        this.primeIn = '';
        this.state = {
            primeOut: '-'
        };

    }
    getPrime(val) {
        getPrimeNumber(val).then(result => {
            this.setState({primeOut: result});
        }).catch(err => {
            this.setState({primeOut: 'error: '+err});
        });
    }
    render() {
        return (
            <div>
            <input maxLength="10" type={'number'} ref={node => this.primeIn = node}/>
            <button onClick={() => this.getPrime(this.primeIn.value)}>get your nth prime (only first 10M)</button>
            {this.state.primeOut}
            </div>
        );
    }
}

export default Prime;
