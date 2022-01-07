/* import React from 'react';
import { Redirect } from 'react-router';
import {Link} from "react-router-dom"
import axios from 'axios';
import { Formik, Form, Field } from "formik";



class AvailableFlights extends React.Component {

    constructor(props) {
        super(props)
    
        this.state = {
             
             tickets: this.props.location.state.tickets
            
        }
      
    }

    bookTicket = (flight) => {
        this.props.history.push({pathname: `/booking`,
        state: {flight: flight}}); //passing ticket as state
        console.log(flight)
       
    }

   

    render (){
        return (
            <div className="flightSearch">
                <h1>Available Flights</h1>
                <h4>Search Flight</h4>
                <table className = "table table-striped table-bordered" style={{ marginTop: 20 }}>
                    <thead>
                        <tr>
                      
                            <td> Flight Id</td>
                            <td> Flight Name</td>
                            <td> Flight No.</td>
                            <td> Source</td>
                            <td> Destination</td>
                            <td> Planning Date</td>
                            <td> Time</td>
                            <td> Fare</td>
                           
                        </tr>

                    </thead>
                    <tbody>
                        {
                            this.state.tickets.map(
                                flight => 
                                <tr key = {flight.flight_id}>
                                     <td> {flight.flight_id}</td>   
                                     <td> {flight.flight_name}</td>   
                                     <td> {flight.flight_no}</td>   
                                     <td> {flight.departure_city}</td>
                                     <td> {flight.arrival_city}</td>
                                     <td> {flight.departure_date}</td>
                                     <td> {flight.departure_time}</td>
                                     <td> {flight.fare}</td>
                                    
                                <td><button className="btn btn-primary" onClick={()=> {this.bookTicket(flight)}}>Book</button></td>
                                    

                                </tr>
                                
                            )
                        }

                    </tbody>
                    
                </table>

            </div>

        )
    }
}

export default AvailableFlights */


import React from 'react';
import { Redirect } from 'react-router';
import {Link} from "react-router-dom"
import axios from 'axios';
import { Formik, Form, Field } from "formik";



class AvailableFlights extends React.Component {

    constructor(props) {
        super(props)
    
        this.state = {
             
             tickets: this.props.location.state.tickets
            
        }
      
    }

    bookTicket = (ticket) => {
        this.props.history.push({pathname: `/booking`,
        state: {ticket: ticket}}); //passing ticket as state
        console.log(ticket)
       
    }

   

    render (){
        return (
            <div className="flightSearch">
              {/*   <h1>Available Flights</h1> */}
               {/*  <h4>Search Flight</h4> */}
                {this.state.tickets.length>0 ? (<div>
                   <div className="table-container"><b>Available Flights</b></div>
                <table className = "table table-striped table-bordered" style={{ marginTop: 20 }}>
                    <thead>
                        <tr>
                      
                            <td> Flight Id</td>
                            <td> Flight Name</td>
                            <td> Flight No.</td>
                            <td> Source</td>
                            <td> Destination</td>
                            <td> Planning Date</td>
                            <td> Time</td>
                            <td> Fare</td>
                           
                        </tr>

                    </thead>
                    <tbody>
                        {
                            this.state.tickets.map(
                                ticket => 
                                <tr key = {ticket.flight_id}>
                                     <td> {ticket.flight_id}</td>   
                                     <td> {ticket.flight_name}</td>   
                                     <td> {ticket.flight_no}</td>   
                                     <td> {ticket.departure_city}</td>
                                     <td> {ticket.arrival_city}</td>
                                     <td> {ticket.departure_date}</td>
                                     <td> {ticket.departure_time}</td>
                                     <td> {ticket.fare}</td>
                                    
                                <td><button className="btn btn-primary" onClick={()=> {this.bookTicket(ticket)}}>Book</button></td>
                                    

                                </tr>
                                
                            )
                        }

                    </tbody>
                    
                </table>

            </div>

        ): (<div><div> <h2 >No flight found </h2></div>
            <button onClick={() => {this.props.history.push(`/search`)}}>Search Again</button>
            </div>)
    }
      </div>
               
               )
            }
}

export default AvailableFlights
 

