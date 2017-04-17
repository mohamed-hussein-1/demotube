import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Results from './Results';
import Player from './Player';


class App extends Component {
  state = {searchQueryText : "",id : 0};
  _self = this;
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <input type="text" onBlur={this.searchQuery}/>
        <div>
          <Results name={this.state.searchQueryText} playVid={this.playVid}/>
        </div>
        <div>
          <Player id={this.state.id} />
        </div>
      </div>
    );
  }
  searchQuery = (e) => {
    this.setState({searchQueryText : e.target.value});
  }
  playVid = (id) => {
    this.setState({id:id});
  }
}

export default App;
