
/* import axios from 'axios'
import React, { Component } from 'react'

class CheckIn extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             _id: " ",
             firstName: " ",
             lastName: " ",
             email: " ",
             phone: " ",
             gender: " ",
             quantity: " ",
              flight_id: " ",
             checkin: [],
             flight_name: " ",
             flight_no: " ",
             departure_city: " ",
             arrival_city: " ",
             departure_date: " ",
             deparuture_time: " ",
             flight: []
        }
    }

    idHandler= (event) => {
        this.setState({
        _id:event.target.value
        })
    }

    submitHandler= (e) => {
        e.preventDefault()
        axios.get("http://localhost:8083/checkin/"+this.state._id)
        .then(response => 
            {console.log(response.data)
            this.setState({checkin: response.data
            })
        })
        .catch(err => console.log(err))

    }

    flightHandler= (e) => {
        e.preventDefault()
        axios.get("http://localhost:8081/flights/"+this.state.checkin.flight_id)
        .then(response => 
            {console.log(response.data)
            this.setState({flight:response.data
            });
        })
        .catch(err => console.log(err))

        
    }


    
    render() {
        return (
            <div className="clickcheckinimage">
                <h3>---CheckIn Details---</h3>
                <form>
                    <label>Booking Id: <input type="number" name="_id" id="_id" value={this.state._id} onChange={this.idHandler}></input></label>
                    <button className="btn btn-primary" onClick={this.submitHandler}>Enter</button>
                </form>
                <p>First Name: {this.state.checkin.firstName}</p>
                <p>Last Name: {this.state.checkin.lastName}</p>
                <p>Email Id: {this.state.checkin.email}</p>
                <p>Mobile No: {this.state.checkin.phone}</p>
                <p>Gender: {this.state.checkin.gender}</p>
                <p>No of Seats: {this.state.checkin.quantity}</p>
               
                <p>Flight Id: {this.state.checkin.flight_id}<button className="btn btn-primary" onClick={this.flightHandler}>Flight Details</button></p>
                <p>Flight Name: {this.state.flight.flight_name}</p>
                <p>Flight No : {this.state.flight.flight_no}</p>
                <p>Starting City: {this.state.flight.departure_city}</p>
                <p>Destination City: {this.state.flight.arrival_city}</p>
                <p>Date of Departure : {this.state.flight.departure_date}</p>
                <p>Departure Time: {this.state.flight.departure_time}</p>
                

            </div>
        )
    }
}

export default CheckIn
 */


import axios from 'axios'
import React, { Component } from 'react'

class CheckIn extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             _id: " ",
             firstName: " ",
             lastName: " ",
             email: " ",
             phone: " ",
             gender: " ",
             quantity: " ",
              flight_id: " ",
             checkin: {},
             flight_name: " ",
             flight_no: " ",
             departure_city: " ",
             arrival_city: " ",
             departure_date: " ",
             deparuture_time: " ",
             fare: " ",
             flight: {}
        }
        this.from_booking=this.props.location.state
    }

    idHandler= (event) => {
        this.setState({
        _id:event.target.value
        })
    }

    submitHandler= (e) => {
        e.preventDefault()
        console.log(this.from_booking)
        // axios.get("http://localhost:8083/checkin/"+this.state._id)
        axios.get("http://localhost:9001/checkin/"+this.state._id)
        .then(response => 
            {console.log(response.data)
            this.setState({checkin: response.data
            })
        })
        .catch(err => console.log(err))

    }

    deleteHandler= (e) => {
        e.preventDefault()
       window.alert("Do you want to cancel booking ?")
        //axios.delete("http://localhost:8083/checkin/"+this.state._id)
        axios.delete("http://localhost:9001/checkin/"+this.state._id)
        .then(response => 
            {console.log(response.data)
            this.setState({checkin: response.data
            })
        })
        .catch(err => console.log(err))

    }

    flightHandler= (e) => {
        e.preventDefault()
        // axios.get("http://localhost:8081/flights/"+this.state.checkin.flight_id)
        axios.get("http://localhost:9001/flights/"+this.state.checkin.flight_id)
        .then(response => 
            {console.log(response.data)
            this.setState({flight:response.data
            });
        })
        .catch(err => console.log(err))

        
    }

    payHandler= (e) => {
        e.preventDefault()
        console.log( this.state.checkin)
        console.log( this.state.flight)
        this.props.history.push({
            pathname: `/paymentmethod`,
            //state: {from_booking: this.from_booking}
            state: {flight: this.state.checkin , ticket: this.state.flight, fromCheckIn:true}
            
        })
    }
    
    render() {
        return (
            <div className="clickcheckinimage">
                <h3>---CheckIn Details---</h3>
                <form>
                    <label>Booking Id: <input type="number" name="_id" id="_id" value={this.state._id} onChange={this.idHandler}></input></label>
                    <button className="btn btn-primary" onClick={this.submitHandler}>Enter</button>
                    <button className="btn btn-danger" onClick={this.deleteHandler} style={{marginLeft:"10px"}}>Delete</button>
                </form>
                <table className="table table-striped table-bordered" style={{ marginTop: 20}}>       
                <thead className="checkinstyle"> 
                    <tr>
                 <td>First Name: {this.state.checkin.firstName}</td>
                <td>Last Name: {this.state.checkin.lastName}</td>
                <td>Email Id: {this.state.checkin.email}</td>
                <td>Mobile No: {this.state.checkin.phone}</td>
                <td>Gender: {this.state.checkin.gender}</td>
                <td>No of Seats: {this.state.checkin.quantity}</td>
                <td>Flight Id: {this.state.checkin.flight_id}<button className="btn btn-primary" onClick={this.flightHandler}>Flight Details</button></td>
                </tr>
                </thead>   
                </table>
                <table className="table table-striped table-bordered" style={{ marginTop: 25}}>  
                <thead className="checkinstyle">
                <tr>       
                <td>Flight Name: {this.state.flight.flight_name}</td>
                <td>Flight No : {this.state.flight.flight_no}</td>
                <td>Starting City: {this.state.flight.departure_city}</td>
                <td>Destination City: {this.state.flight.arrival_city}</td>
                <td>Date of Departure : {this.state.flight.departure_date}</td>
                <td>Departure Time: {this.state.flight.departure_time}</td>
                <td>Fare: {this.state.flight.fare}</td> 
                </tr>
                </thead>  
                </table>
                {/* <p>First Name: {this.state.checkin.firstName}</p>
                <p>Last Name: {this.state.checkin.lastName}</p>
                <p>Email Id: {this.state.checkin.email}</p>
                <p>Mobile No: {this.state.checkin.phone}</p>
                <p>Gender: {this.state.checkin.gender}</p>
                <p>No of Seats: {this.state.checkin.quantity}</p> */}
                
               
               {/*  <p>Flight Id: {this.state.checkin.flight_id}<button className="btn btn-primary" onClick={this.flightHandler}>Flight Details</button></p>
          <p>Flight Name: {this.state.flight.flight_name}</p>
                <p>Flight No : {this.state.flight.flight_no}</p>
                <p>Starting City: {this.state.flight.departure_city}</p>
                <p>Destination City: {this.state.flight.arrival_city}</p>
                <p>Date of Departure : {this.state.flight.departure_date}</p>
                <p>Departure Time: {this.state.flight.departure_time}</p>
                <p>Fare: {this.state.flight.fare}</p>
                <button className="btn btn-primary" onClick={this.payHandler} style={{marginLeft:"10px"}}>Pay</button> 
                 */}

            </div>
        )
    }
}

export default CheckIn

