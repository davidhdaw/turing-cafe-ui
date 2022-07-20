import React, {Component} from 'react'
import './ReservationForm.css'

class ReservationForm extends Component {
    state = {
        name: '',
        date: '',
        time: '',
        number: '',
    }

  handleChange = (event) => {
    this.setState({[event.target.name]: event.target.value});
  }

  handleSubmit = (e) => {
    e.preventDefault();
    let reservation = this.state
    reservation.id = Date.now()
    console.log(reservation);
  }

  render() {
    return (
        <form onSubmit={this.handleSubmit} className='reservation-form' >
            <label>
                Name:
                <input 
                type='text' 
                name='name' 
                value={this.state.name} 
                onChange={this.handleChange}
                />
            </label>
            <label>
                Date:
                <input 
                type='text' 
                name='date' 
                value={this.state.date} 
                onChange={this.handleChange}
                />
            </label>
            <label>
                Time:
                <input 
                type='text' 
                name='time' 
                value={this.state.time} 
                onChange={this.handleChange}
                />
            </label>
            <label>
                Guests:
                <input 
                type='text' 
                name='number' 
                value={this.state.number} 
                onChange={this.handleChange}
                />
            </label>
            <input type='submit' value='Submit' />
        </form>
    )
  }
}

export default ReservationForm