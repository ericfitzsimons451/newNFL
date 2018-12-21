import React, { Component } from 'react';
import Display from './Display.js';
// import logo from './logo.svg';
import './App.css';

export default class App extends Component {
  constructor() {
    super();

    this.state = {
      nflTeams: null,
      cities: null,
      isLoading: true
    } 
  }



  componentDidMount() {
    fetch('https://whateverly-datasets.herokuapp.com/api/v1/nflTeams')
    .then(data => data.json())
    .then(data => this.setState({
      nflTeams: data.nflTeams,
      isLoading: false
        }))
    .catch(err => console.log(err))



    fetch('https://whateverly-datasets.herokuapp.com/api/v1/cities')
    .then(data => data.json())
    .then(data => this.setState({cities: data.cities}))
    .catch(err => console.log(err))  
  }

  render() {

    if (this.state.isLoading) {

    return(
      <div className="loading">
       <h1>...Loading...</h1>
      </div>
    );
      
    } else {

      return(
        <div className="App">
          <Display 
          nflTeams={this.state.nflTeams} />
        </div>
        )
    }

  }
}


