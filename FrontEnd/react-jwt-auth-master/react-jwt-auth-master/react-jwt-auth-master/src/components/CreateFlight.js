import React, { Component } from "react";
//import AdminNavigationBar from "../components/adminNavigationBar";
import axios from "axios";
import { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css'; // Import css
import { Redirect, Link } from "react-router-dom";

//import { confirmAlert } from 'react-confirm-alert'; // Import
//import 'react-confirm-alert/src/react-confirm-alert.css'; // Import css

const ErrorValidationLabel = ({ txtLbl }) => (
  <label htmlFor="" style={{ color: "red" }}>
      {txtLbl}
  </label>
);


class CreateFlight extends Component {
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
    isFlightCreated: false
  }
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
      this.setState({ departure_time: value.toUpperCase() });
    }
  };

  handleFare = event => {
    const { value } = event.target;
    if (value != null) {
      this.setState({ fare: value.toUpperCase().replace(/[^0-9]/ig,'') });
    }
  };

  handleClickDelete = event => {
    event.preventDefault();
   
  };

  handleSubmit1 = event => {
    event.preventDefault();

    const newFlight = {
      flight_id: this.state.flight_id,
      flight_name: this.state.flight_name,
      flight_no: this.state.flight_no,
      departure_city: this.state.departure_city,
      arrival_city: this.state.arrival_city,
      departure_date: this.state.departure_date,
      departure_time: this.state.departure_time,
      fare: this.state.fare
    
    };

   /* axios
      .post(
        "http://localhost:8064/admin/addflg",
        newFlight
      )
      .then(response => response)
      .catch(error => error.message);

   */
   

    confirmAlert({
      title: 'Confirm to submit',
      message: 'Are you sure to do this.',
      buttons: [
        {
          label: 'Yes',
          onClick: () => axios
          .post(
            "http://localhost:8064/admin/addflg",
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

   /* confirmAlert({
      customUI: ({ onClose }) => {
        return (
          <div className='custom-ui'>
            <h1>Are you sure?</h1>
            <p>You want to add this file?</p>
            <button onClick={onClose}>No</button>
            <button
              onClick={() => {
                this.handleClickDelete();
                onClose();
              }}
            >
              Yes, add it!
            </button>
          </div>
        );
      }
    });*/

    this.setState({
      flight_id: "",
      flight_name: "",
      flight_no:"",
      departure_city: "",
      arrival_city: "",
       departure_date: "",
       departure_time: "",
      fare: "",
    
      isFlightCreated: true
    });
  };

  /*render() {
    if (this.state.isFlightCreated) {
      return <Redirect to="/flightlist" />;
    }
  }*/
  render() {
    return "Flight created successfully";
  }


render() {

    const { flight_name, allFieldsValid } = this.state;

    const renderFlightNameValidationError = flight_name.valid ? "" : <ErrorValidationLabel txtLbl={flight_name.requiredTxt} />;
    //const renderFnameValidationError = firstname.valid ? "" : <ErrorValidationLabel txtLbl={firstname.requiredTxt} />;

    return (
      <div>
        
        <div className="d-flex justify-content-center">
          <div className="card bg-light mb-3">
            <div className="card-header">
              <h3 className="d-flex justify-content-center">Add Flight</h3>
            </div>
            <div className="card-body">
              <h5 className="card-title">
                <form>
                  <div className="form-row">
                    <div className="col">
                      <label htmlFor="flight_id">Flight Id</label>
                      <input
                        type="number"
                        className="form-control"
                        id="flight_id"
                        onChange={this.handleFlightid}
                        value={this.state.flight_id}
                        required
                      />
                    </div>
                    
                    <div className="col">
                      <label htmlFor="flight_name">Flight Name</label>
                      <input
                        type="name"
                        required
                        className="form-control"
                        id="flight_name"
                        placeholder="eg. AirIndia"
                        onChange={this.handleFlightName}
                        value={this.state.flight_name}
                        
                      />
                      
                    {renderFlightNameValidationError}
                    
                    </div>
                    <div className="col">
                      <label htmlFor="flight_no">Flight No</label>
                      <input
                        type="name"
                        className="form-control"
                        id="flight_no"
                        placeholder="eg. B563"
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
                        placeholder="eg. Pune"
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
                        placeholder="eg. USA"
                        className="form-control"
                        onChange={this.handleendStation}
                        value={this.state.arrival_city}
                        required
                      />
                    </div>
                    <div className="col">
                      <label htmlFor="inputState">Departure Date</label>
                      <input
                      type="date"
                        id="departure_date"
                        pattern="^(?:(?:31(\/|-|\.)(?:0?[13578]|1[02]))\1|(?:(?:29|30)(\/|-|\.)(?:0?[13-9]|1[0-2])\2))(?:(?:1[6-9]|[2-9]\d)?\d{2})$|^(?:29(\/|-|\.)0?2\3(?:(?:(?:1[6-9]|[2-9]\d)?(?:0[48]|[2468][048]|[13579][26])|(?:(?:16|[2468][048]|[3579][26])00))))$|^(?:0?[1-9]|1\d|2[0-8])(\/|-|\.)(?:(?:0?[1-9])|(?:1[0-2]))\4(?:(?:1[6-9]|[2-9]\d)?\d{2})$" 
                        oninvalid="setCustomValidity('Please enter on numbers only. ')" 
                        className="form-control"
                        onChange={this.handledepartureDate}
                        value={this.state.departure_date}
                        placeholder="DD-MM-YYYY" 
                        required
                      />
                    </div>
                    <div className="form-row">
                    <div className="col">
                      <label htmlFor="inputState">Departure Time</label>
                      <input
                        id="departure_time"
                        oninvalid="setCustomValidity('Please enter in proper format. ')"placeholder="hh:mm pm/am"
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
                      value="createTicket"
                      className="btn btn-dark btn-lg btn-block"
                      onClick={this.handleSubmit1}
                    >
                      Submit
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
 export default CreateFlight;