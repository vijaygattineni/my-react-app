import React, { Component } from 'react';
import 'whatwg-fetch';

class Series extends Component {

    state = {
        series: []
    }

    componentDidMount() {
        fetch('http://api.tvmaze.com/search/shows?q=vikings')
        .then(response => response.json())
        .then(json => this.setState({series: json}));
    }

    render() {
        return (
            <div> Length of series array {this.state.series.length}</div>
        )
    }
}

export default Series;