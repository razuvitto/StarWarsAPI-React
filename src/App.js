/* Coded with <3 Razuvitto
location : src/App.js
July 2019 */

import React, { Component } from 'react';
import './App.css';
import Axios from 'axios';
import List from './List';


class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            films: [],
        }

        this.getFilmInfo = this.getFilmInfo.bind(this);
    }

    getFilmInfo() {
        return Axios.get("https://swapi.co/api/films/")
            .then((response) => {
                console.log(response.data.results);
                this.setState({ films: response.data.results })
            })
    }

    componentDidMount() {
        this.getFilmInfo()
    }
    render() {
        const { films } = this.state;
        return ( <div className = "App" >
                < List films = { films } /> 
                </div>
        );
    }
}

export default App;

// end of file