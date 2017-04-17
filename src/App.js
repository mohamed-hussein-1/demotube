import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Results from './Results'

// class App extends Component {
//   render() {
//     return (
//       <div className="App">
//         <div className="App-header">
//           <img src={logo} className="App-logo" alt="logo" />
//           <h2>Welcome to React</h2>
//         </div>
//         <p className="App-intro">
//           To get started, edit <code>src/App.js</code> and save to reload.
//         </p>
//       </div>
//     );
//   }
// }

class App extends Component {
  state = {searchQueryText : "Hi"};
  
  render() {
    console.log("app.js render called");
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
          <Results name={this.state.searchQueryText}/>
        </div>
      </div>
    );
  }
  searchQuery = (e) => {
    console.log("why the fuck it didn't change >>>??? " + e.target.value);
    // state.searchQueryText = e.target.value;
    this.setState({searchQueryText : e.target.value});
  }
}

export default App;
