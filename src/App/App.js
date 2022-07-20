import React, { Component } from 'react';
import './App.css';
import { getReservations } from '../apiCalls';
import ReservationArray from '../ReservationArray/ReservationArray';
import ReservationForm from '../ReservationForm/ReservationForm';

class App extends Component {
  state = {
    reservations: [],
    loading: false,
  }

  componentDidMount() {
    getReservations().then(data => this.setState({reservations: data}))
  }

  addReservation = (newReservation) => {
    let allReservations = this.state.reservations
    allReservations.push(newReservation)
    this.setState({reservations: allReservations})
  }



  render() {
    return (
      <div className="App">
        <h1 className='app-title'>Turing Cafe Reservations</h1>
        <div className='resy-form'>
          <ReservationForm addReservation={this.addReservation}/>
        </div>
        <div className='resy-container'>
          <ReservationArray reservations={this.state.reservations} />
        </div>
      </div>
    )
  }
}

export default App;
