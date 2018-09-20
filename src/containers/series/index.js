import React, { Component } from 'react';
import 'whatwg-fetch';
import SeriesList from '../../components/SeriesList';
import Intro from '../../components/Intro';

class Series extends Component {

    state = {
        series: [],
        seriesName: '',
        isFetching: false
    }

    onSeriesInputChange = (e) => {
        this.setState({seriesName: e.target.value, isFetching: true});
        fetch(`http://api.tvmaze.com/search/shows?q=${e.target.value}`)
        .then(response => response.json())
        .then(json => this.setState({series: json, isFetching: false}));
    }

    render() {
        return (
            <div>
            <Intro message="Welcome to web series" />
            Total: {this.state.series.length}
            <div>
                <input type="text" onChange={this.onSeriesInputChange} placeholder="Search web series" />
            </div>
            {
                this.state.series.length ===0 &&
                this.state.seriesName.trim() === '' && 
                !this.state.isFetching && <p>No results found</p>
            }
            {
                this.state.isFetching && <p>Loading...</p>   
            }
            <SeriesList list={this.state.series} /> 
            </div>
        )
    }
}

export default Series;