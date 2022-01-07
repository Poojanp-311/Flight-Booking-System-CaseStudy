/* import React, { useState } from "react";
import axios from "axios";
import { Redirect, Link } from "react-router-dom";
import validator from 'validator'



class PaymentMethod extends React.Component{
constructor(props) {
  super(props)
 
  this.state = {
    method: "",
     firstName:" ",
     lastName:" ",
     email:" ",
     phone:" ",
     gender: " ",
     no_of_seats: "",
     isFlightCreated: false
  }
  this.handleChange = this.handleChange.bind(this);
  this.handleSubmit = this.handleSubmit.bind(this);
}

componentDidMount() {
    //setting the state value to session storage value



    this.setState({ source: sessionStorage.getItem(SOURCE) });
    this.setState({ destination: sessionStorage.getItem(DESTINATION) });
    this.setState({ nooftickets: sessionStorage.getItem(NOOFTICKETS) });
    this.setState({ total: sessionStorage.getItem(NOOFTICKETS) * 340 });
    this.setState({
    });
    this.setState({
      total:
        sessionStorage.getItem(NOOFTICKETS) * 340 -
        sessionStorage.getItem(NOOFTICKETS) * 340 * (10 / 100)
    });
  }

fnHandler = (e) =>{
  const firstName = document.getElementById("firstName").value
    this.setState({
        firstName: e.target.value.replace(/[^a-zA-Z]/ig,'')
    })
    console.log("First name: "+firstName)
}

lnHandler = (e) =>{
  const lastName = document.getElementById("lastName").value
    this.setState({
        lastName: e.target.value.replace(/[^a-zA-Z]/ig,'')
    })
    console.log("Last name: "+lastName)
}

emHandler = (e) => {
  
  const email = document.getElementById("email").value
  this.setState({
    email: e.target.value
   
})

console.log("Email-id: "+email)
}



phHandler = (e) => {
  const phone = document.getElementById("phone").value
  this.setState({
    phone: e.target.value.replace(/[^0-9]/ig,'')
})
console.log("Mobile No.: "+phone)
}

genderHandler = (e) =>{
  const gender = document.getElementById("gender").value
    this.setState({
        gender: e.target.value
    })
    console.log("Gender: "+gender)
}

seatsHandler = (e) =>{
    const no_of_seats = document.getElementById("no_of_seats").value
      this.setState({
          no_of_seats: e.target.value
      })
      console.log("No of Seats: "+no_of_seats)
  }
  



 submitHandler1 = (event) => {
  event.preventDefault();

   const databody = {
     
      firstName : this.state.firstName,
      lastName: this.state.lastName,
      email: this.state.email,
      phone: this.state.phone,
      gender:this.state.gender,
      no_of_seats: this.state.no_of_seats,
      flight_id: this.props.location.state.flight.flight_id
      
   };

   console.log(databody)
  
   axios.post("http://localhost:8082/passengers", databody)
   .then(response => response)
   .catch(error => console.log(error))

   window.alert("flight booked successfully");
   this.setState({
      firstName:"",
      lastName:"",
      email:"",
      phone: "",
      gender: "",
      no_of_seats: "",
      isFlightCreated: true
   });

   this.props.history.push({
     pathname: '/payment'
   })
 };

 


  render() {
    if (this.state.isFlightCreated) {
      return <Redirect to ="/availableflights" />;
    }
  }

  render(){
    return (
      <div className="availableflights">
         Book the Flight
          <h1 className="text-center">{this.props.location.state.flight.flight_name}</h1>
        <form >
       

        <p><label>First Name<input type="text" name="firstName" id="firstName" value={this.state.firstName} onChange={this.fnHandler} required></input></label></p>
        <p><label>Last Name<input type="text" name="lastName" id="lastName" value={this.state.lastName} onChange={this.lnHandler} required></input></label></p>
        <p><label>Email-id<input type="email" name="email" id="email" value={this.state.email} onChange={this.emHandler} required></input></label></p>
        <p><label>Mobile-No<input type="text" name="phone" id="phone" value={this.state.phone} onChange={this.phHandler} required></input></label></p>
        <p><label>No of Seats<input type="number" name="no_of_seats" id="no_of_seats" value={this.state.no_of_seats} onChange={this.seatsHandler} required></input></label></p>
       <p><label name="gender">Gender </label>
                <select name="gender" id="gender" value={this.state.gender} onChange={this.genderHandler}>
                <option value="Female">Female</option>
                <option value="Male">Male</option>
                </select></p>

                <p><label>No of Seats<input type="number" name="no_of_seats" id="no_of_seats" value={this.state.no_of_seats} onChange={this.seatsHandler} required></input></label></p>
      <button type="submit" onClick={this.submitHandler1}>Confirm</button>

      </form>
      </div>
    )
  }
}

export default PaymentMethod */


import React, { Component } from 'react'
//import StripeButton from './stripebutton'
import StripeButton from "./stripebutton.component";
import {FIRSTNAME,LASTNAME,QUANTITY } from "./Booking";

class PaymentMethod extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             total: " "

        }
        this.flight= this.props.location.state.flight
        this.ticket=this.props.location.state.ticket
        this.fromCheckIn=this.props.location.state.fromCheckIn
        //this.preference=this.props.location.state.preference
    }

    submitHandler=(e) => {
        e.preventDefault()
        this.props.history.push({
            pathname: `/stripebutton`,
            //state: this.state.total
            state:{total: this.state.total , ticket: this.ticket}
        })
    }

    

    render() {
        return (
         
          
          <div className="stripedetails">
            <div className="container">
                <div className= "text-container">
                <h3 className="text-center" style={{color:'white'}}></h3>
                <p className="label-group">First Name: {this.flight.firstName}</p>
                <p className="label-group">Last Name: {this.flight.lastName}</p>
                <p className="label-group">Flight Name: {this.ticket.flight_name}</p>
                <p className="label-group">Number of seats: {this.flight.quantity}</p>
                  <p className="label-group">Total: {(parseInt(this.ticket.fare)*parseInt(this.flight.quantity))}</p> 
                 <StripeButton className="label-group" price= {(parseInt(this.ticket.fare)*parseInt(this.flight.quantity))} databody={this.flight}/>  
              
             {/*  {this.fromCheckIn ? (<div><p className="label-group">Total: {this.preference}</p>
                <StripeButton className="label-group" price= {parseInt(this.preference)} /></div>):
                (<div><p className="label-group">Total: {(parseInt(this.ticket.fare)*parseInt(this.flight.quantity))}</p><StripeButton className="label-group" price= {(parseInt(this.ticket.fare)*parseInt(this.flight.quantity))} databody={this.flight} fromCheckIn={this.fromCheckIn}   bookingid={this.flight._id}/></div>)}
                  */}
              
                </div>
            </div>
              </div>
        )
    }
}

export default PaymentMethod