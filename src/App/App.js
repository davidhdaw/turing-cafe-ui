import React, { Component } from 'react';
import './App.css';
import { getReservations } from '../apiCalls';
class App extends Component {
  state = {
    name: '',
    date: '',
    time: '',
    number: '',
    loading: false,
  }

  componentDidMount() {
    getReservations().then(data => console.log(data))
  }



  render() {
    return (
      <div className="App">
        <h1 className='app-title'>Turing Cafe Reservations</h1>
        <div className='resy-form'>

        </div>
        <div className='resy-container'>
          
        </div>
      </div>
    )
  }
}

export default App;
