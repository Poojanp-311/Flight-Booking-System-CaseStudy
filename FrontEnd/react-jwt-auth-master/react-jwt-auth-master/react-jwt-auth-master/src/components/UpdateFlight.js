import React, { Component } from "react";

import axios from "axios";
import { Redirect, Link } from "react-router-dom";
import { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css'; // Import css

class UpdateFlight extends Component {
  constructor(props){
    super(props)

  this.state = {
  flight_id: "",
	flight_name: "",
	flight_no:"",
	departure_city: "",
	arrival_city: "",
	 departure_date: "",
	 departure_time: "",
	fare: "",
    isFlightUpdated: false
  }

  this.post=this.props.location.state.post
}

  handleFlightid = event => {
    const { value } = event.target;
    if (value != null) {
      this.setState({ flight_id: value.toUpperCase() });
    }
  };

  

  handleFlightName = event => {
    const { value } = event.target;
    if (value != null) {
      this.setState({ flight_name: value.replace(/[^a-zA-Z]/ig,'') });
    }
  };

  handleFlightNo = event => {
    const { value } = event.target;
    if (value != null) {
      this.setState({ flight_no: value.toUpperCase() });
    }
  };

  

  handlestartStation = event => {
    const { value } = event.target;
    if (value != null) {
      this.setState({ departure_city: value.replace(/[^a-zA-Z]/ig,'') });
    }
  };

  handleendStation = event => {
    const { value } = event.target;
    if (value != null) {
      this.setState({ arrival_city: value.replace(/[^a-zA-Z]/ig,'') });
    }
  };

  handledepartureDate = event => {
    const { value } = event.target;
    if (value != null) {
      this.setState({ departure_date: value.toUpperCase() });
    }
  };
  handledepartureTime = event => {
    const { value } = event.target;
    if (value != null) {
      this.setState({ departure_time: value });
    }
  };

  handleFare = event => {
    const { value } = event.target;
    if (value != null) {
      this.setState({ fare: value.replace(/[^0-9]/ig,'') });
    }
  };

  handleSubmit2 = event => {
    event.preventDefault();

    const newFlight = {
      flight_id: this.post.flight_id,
      flight_name: this.state.flight_name,
      flight_no: this.state.flight_no,
      departure_city: this.state.departure_city,
      arrival_city: this.state.arrival_city,
      departure_date: this.state.departure_date,
      departure_time: this.state.departure_time,
      fare: this.state.fare
    
    };

    /* axios
      .put(
        `http://localhost:8064/admin/updateflg/${this.post.flight_id}`,
        newFlight
      )
      .then(response => response)
      .catch(error => error.message);
 */
    //window.alert("Flight updated successfully");

    confirmAlert({
      title: 'Confirm to update',
      message: 'Are you sure to do this.',
      buttons: [
        {
          label: 'Yes',
          onClick: () =>  axios
          .put(
            `http://localhost:8064/admin/updateflg/${this.post.flight_id}`,
            newFlight
          )
          .then(response => response)
          .catch(error => error.message)
        },
        {
          label: 'No',
          //onClick: () => alert('Click No')
        }
      ]
    });

    this.setState({
      flight_id: "",
      flight_name: "",
      flight_no:"",
      departure_city: "",
      arrival_city: "",
       departure_date: "",
       departure_time: "",
      fare: "",
    
      isFlightUpdated: true
    });

    this.props.history.push({
        pathname:`/deleteflight`,
    })
  };

  

render() {
    return (
      <div>
        
        <div className="d-flex justify-content-center">
          <div className="card bg-light mb-3">
            <div className="card-header">
              <h3 className="d-flex justify-content-center">Update Flight</h3>
            </div>
            <div className="card-body">
              <h5 className="card-title">
                <form>
                  <div className="form-row">
                    <div className="col">
                      <label htmlFor="flight_id">Flight Id:{this.post.flight_id}</label>
                      
                    </div>
                    
                    <div className="col">
                      <label htmlFor="flight_name">Flight Name</label>
                      <input
                        type="name"
                        className="form-control"
                        id="flight_name"
                        placeholder={this.post.flight_name}
                        onChange={this.handleFlightName}
                        value={this.state.flight_name}
                        required
                      />
                    </div>
                    <div className="col">
                      <label htmlFor="flight_no">Flight No</label>
                      <input
                        type="name"
                        className="form-control"
                        id="flight_no"
                        placeholder={this.post.flight_no}
                        onChange={this.handleFlightNo}
                        value={this.state.flight_no}
                        required
                      />
                    </div>
                  </div>
                  <br />
                  <div className="form-row">
                    <div className="col">
                      <label htmlFor="inputState">Departure City</label>
                      <input
                        id="departure_city"
                        placeholder={this.post.departure_city}
                        className="form-control"
                        onChange={this.handlestartStation}
                        value={this.state.departure_city}
                        required
                      />
                    </div>
                   </div>
                    <div className="col">
                      <label htmlFor="inputState">Arrival City</label>
                      <input
                        id="arrival_city"
                        placeholder={this.post.arrival_city}
                        className="form-control"
                        onChange={this.handleendStation}
                        value={this.state.arrival_city}
                        required
                      />
                    </div>
                    <div className="col">
                      <label htmlFor="inputState">Departure Date</label>
                      <input
                        id="departure_date"
                        placeholder={this.post.departure_date}
                        pattern="^(?:(?:31(\/|-|\.)(?:0?[13578]|1[02]))\1|(?:(?:29|30)(\/|-|\.)(?:0?[13-9]|1[0-2])\2))(?:(?:1[6-9]|[2-9]\d)?\d{2})$|^(?:29(\/|-|\.)0?2\3(?:(?:(?:1[6-9]|[2-9]\d)?(?:0[48]|[2468][048]|[13579][26])|(?:(?:16|[2468][048]|[3579][26])00))))$|^(?:0?[1-9]|1\d|2[0-8])(\/|-|\.)(?:(?:0?[1-9])|(?:1[0-2]))\4(?:(?:1[6-9]|[2-9]\d)?\d{2})$" 
                        oninvalid="setCustomValidity('Please enter on numbers only. ')" 
                        type="date"
                        className="form-control"
                        onChange={this.handledepartureDate}
                        value={this.state.departure_date}
                        required
                      />
                    </div>
                    <div className="form-row">
                    <div className="col">
                      <label htmlFor="inputState">Departure Time</label>
                      <input
                        id="departure_time"
                        oninvalid="setCustomValidity('Please enter in proper format. ')"
                        placeholder={this.post.departure_time}
                        className="form-control"
                        onChange={this.handledepartureTime}
                        value={this.state.departure_time}
                        required
                      />
                    </div>
                   </div>
                   <div className="form-row">
                    <div className="col">
                      <label htmlFor="inputState">Fare</label>
                      <input
                        id="fare"
                        placeholder={this.post.fare}
                        oninvalid="setCustomValidity('Please enter in number format only. ')"
                        className="form-control"
                        onChange={this.handleFare}
                        value={this.state.fare}
                        required
                      />
                    </div>
                   </div>
                  
                  <br />
                
              
                  <br />
                 <div>
                    <button
                      type="submit"
                      //value="createTicket"
                      className="btn btn-dark btn-lg btn-block"
                      onClick={this.handleSubmit2}
                    >
                      OK
                    </button>
                    
                    
                  </div>
                </form>
              </h5>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
 export default UpdateFlight;

 

 