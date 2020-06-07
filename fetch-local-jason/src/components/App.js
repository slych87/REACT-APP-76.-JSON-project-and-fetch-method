import React, { Component } from 'react';
import './App.css';
import Word from './Word';

class App extends Component {
  state = {
    words: [], /*Zrobimy żądanie AJAX - asynchroniczne żądanie */
    isLoaded: false,
  }

  componentDidMount() {
    // setTimeout(this.fetchData, 3000)

    fetch('data/words.json') // poobieramy dane, ale jest ich więcej niż byśmy chcieli
      .then(response => response.json()) // przerabiamy je na JSON, CZYLI WYODRĘBNIAMY
      .then(data => {
        this.setState({
          words: data.words, //dostajemy się w pliku JSON do obiektu words
          isLoaded: true,
        })
      })

  }

  // fetchData = () => {
  //   fetch('data/words.json') // poobieramy dane, ale jest ich więcej niż byśmy chcieli
  //     .then(response => response.json()) // przerabiamy je na JSON, CZYLI WYODRĘBNIAMY
  //     .then(data => {
  //       this.setState({
  //         words: data.words, //dostajemy się w pliku JSON do obiektu words
  //         isLoaded: true,
  //       })
  //     })
  // }

  render() {
    const words = this.state.words.map(word => (
      <Word key={word.id} english={word.en} polish={word.pl} />
    ))
    return (
      <ul >
        {this.state.isLoaded ? words : "Wczytuję dane"}
      </ul>
    );
  }
}

export default App;
