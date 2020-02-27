import React, { Component } from 'react';
import './App.css';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = { name: "" }
  }


  setName = (e) => {
    this.setState({ name: e.target.value });
    
  }

  handleSubmit = (e) => {
    e.preventDefault();
    alert("My name is :" + this.state.name)
  }

  render() {
    return (
      <div>
        <h1>Name</h1>
        <form onSubmit={this.handleSubmit}>
          <input type="text" name="name" 
          value={this.state.name} 
          onChange={this.setName} />
          <button type="submit">
            Submit name
          </button>
        </form>
      </div>
    )
  }
}



export default App;
