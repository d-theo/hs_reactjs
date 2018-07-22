import React, { Component } from 'react';
import {Link} from "react-router-dom";
import './header.css';

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selected: 'music'
        };
    }
    setSelected(val) {
        this.setState({selected: val});
    }
    render() {
        return (
            <div className={'d-flex row'}>
                <Link
                    className={'col-sm-4 '+(this.state.selected === 'music' ? 'app-header-selected' : '')}
                    onClick={() => this.setSelected('music')} to="/music">music</Link>
                <Link
                    className={'col-sm-4 '+(this.state.selected === 'prime' ? 'app-header-selected' : '')}
                    onClick={() => this.setSelected('prime')} to="/prime">prime</Link>
                <Link
                    className={'col-sm-4 '+(this.state.selected === 'graph' ? 'app-header-selected' : '')}
                    onClick={() => this.setSelected('graph')} to="/graph">graph</Link>
            </div>
        );
    }
}

export default Header;
