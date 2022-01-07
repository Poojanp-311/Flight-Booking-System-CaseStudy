import React from 'react';
//import AllFlights from '../services/AllFlights';
import axios from 'axios';


class FlightList extends React.Component {

    constructor(props){
        super(props)
        this.state = {
            flights:[]                     // table name is users in spring boot
        }
    }

    componentDidMount() {
        axios
          .get("http://localhost:8081/flights")
          .then(response => {
            this.setState({ flights: response.data });
          })
          .catch(function(error) {
            console.log(error);
          });
      }


      submitHandler= () => {
         this.props.history.push({
             pathname: "/createflight"
         })
      }

      submitHandler2= () => {
        this.props.history.push({
            pathname: "/updateflight"
        })
     }

      submitHandler1= () => {
        this.props.history.push({
            pathname: "/deleteflight"
        })
     }

    render (){
        return (
            <div>
                <h1 className = "text-center">Flights List</h1>
                <table className = "table table-striped">
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
                            this.state.flights.map(
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
                                     <button type="submit" onClick={this.submitHandler}>Add</button>
                                     <button type="submit" onClick={this.submitHandler2}>Update</button>
                                     <button type="submit" onClick={this.submitHandler1}>Delete</button>
                                </tr>
                            )
                        }
                        
                    </tbody>
                </table>

            </div>

        )
    }
}

export default FlightList