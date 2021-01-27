import React, { Component } from 'react';
import './List.css';

export default class List extends Component {

    state = {
        list: this.props.list.map((e, i) => (<li key = {i}><input type="checkbox"/>{e}</li>))
    }

    render() {
        return (
            <div>
                <form className="App">
                    <ul>
                        {this.state.list}
                    </ul>
                </form>
            </div>
        )
    }
}
