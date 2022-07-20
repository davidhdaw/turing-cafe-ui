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
    this.updateReservations()
  }

  updateReservations = () => {
    getReservations().then(data => this.setState({reservations: data}))
  }



  render() {
    return (
      <div className="App">
        <h1 className='app-title'>Turing Cafe Reservations</h1>
        <div className='resy-form'>
          <ReservationForm updateReservations={this.updateReservations}/>
        </div>
        <div className='resy-container'>
          <ReservationArray reservations={this.state.reservations} updateReservations={this.updateReservations} />
        </div>
      </div>
    )
  }
}

export default App;
