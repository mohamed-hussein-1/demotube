import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Results from './Results';
import Player from './Player';


class App extends Component {
  state = {searchQueryText : "",id : 0,title:""};
  _self = this;
  render() {
    return (
      <div className="App">
        
        
        <div className="search-wrapper">
          <input type="text" onBlur={this.searchQuery} onKeyPress={this._handleKeyPress}/>
        </div>
        <div className="content-wrapper">
          <Results name={this.state.searchQueryText} playVid={this.playVid}/>
          <Player id={this.state.id} title={this.state.title}/>
        </div>
      </div>
    );
  }
  searchQuery = (e) => {
    this.setState({searchQueryText : e.target.value});
  }
  _handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      this.searchQuery(e);
    }
  }
  playVid = (id,title) => {
    this.setState({id:id,title:title});
  }
}

export default App;
