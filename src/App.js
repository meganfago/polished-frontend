import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import PolishHeader from './Components/PolishHeader'
import PolishContainer from './Components/PolishContainer'


class App extends Component {

  state = {
    polishes: [],
    favorites: []
  }

  componentDidMount(){
    this.fetchPolishes()
  }

  fetchPolishes = () => {
    console.log("fetch")
    fetch("https://makeup-api.herokuapp.com/api/v1/products.json?product_type=nail_polish")
    .then(resp => resp.json())
    .then(data => this.setState({polishes : data}))
  }

    getPolishColours = () => {
      this.state.polishes.map((polish) => {
        polish.product_colors.forEach((product_colors) => {
          return product_colors.colour_name
        }  
      )}
    )}

  render() {

    return (
      <div className="App">
      <PolishHeader />
      <PolishContainer polishes={this.state.polishes} />
      </div>
    );
  }
}

export default App;
