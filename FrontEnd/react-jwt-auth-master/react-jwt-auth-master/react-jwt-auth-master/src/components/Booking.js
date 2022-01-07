//import React from 'react';
/* import React, { useState } from "react";
import axios from "axios";
import { Redirect, Link } from "react-router-dom";
import validator from 'validator'



class Booking extends React.Component{
constructor(props) {
  super(props)
 
  this.state = {
    
     firstName:" ",
     lastName:" ",
     email:" ",
     phone:" ",
     gender: " ",
     isFlightCreated: false
  }
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





 submitHandler1 = (event) => {
  event.preventDefault();

   const databody = {
     
      firstName : this.state.firstName,
      lastName: this.state.lastName,
      email: this.state.email,
      phone: this.state.phone,
      gender:this.state.gender,
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
      isFlightCreated: true
   });
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

       <p><label name="gender">Gender </label>
                <select name="gender" id="gender" value={this.state.gender} onChange={this.genderHandler}>
                <option value="Female">Female</option>
                <option value="Male">Male</option>
                </select></p>


      <button type="submit" onClick={this.submitHandler1}>Confirm</button>
      </form>
      </div>
    )
  }
}

export default Booking */






import React, { useState } from "react";
import axios from "axios";
import { Redirect, Link } from "react-router-dom";

import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import validator from 'validator';

/* export const FIRSTNAME ="FIRSTNAME";
export const LASTNAME ="LASTNAME";
export const QUANTITY ="QUANTITY"; */

const required = value => {
  if (!value) {
    return (
      <div className="alert alert-danger" role="alert">
        This field is required!
      </div>
    );
  }
};


class Booking extends React.Component{
constructor(props) {
  super(props)
 
  this.state = {
    
     firstName:" ",
     lastName:" ",
     email:" ",
     phone:" ",
     gender: " ",
     quantity: " ",
     isFlightCreated: false
  }
  this.ticket=this.props.location.state.ticket
}

fnHandler = (e) =>{
  const firstName = document.getElementById("firstName").value
    this.setState({
        firstName: e.target.value
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

quantityHandler = (e) =>{
  const quantity = document.getElementById("quantity").value
    this.setState({
        quantity: e.target.value
    })
    console.log("No of Seats: "+quantity)
}



 submitHandler1 = (event) => {
  event.preventDefault();

   const databody = {
     
      firstName : this.state.firstName,
      lastName: this.state.lastName,
      email: this.state.email,
      phone: this.state.phone,
      gender:this.state.gender,
      quantity: this.state.quantity,
     // flight_id: this.props.location.state.flight.flight_id
      flight_id: this.props.location.state.ticket.flight_id
      
   };

   console.log(databody)
  
  
   //axios.post("http://localhost:8082/passengers", databody)
    /*axios.post("http://localhost:9001/passengers", databody)
   .then(response => response)
   .catch(error => console.log(error)) */

   //window.alert("flight booked successfully");
   /*this.setState({
      firstName:"",
      lastName:"",
      email:"",
      phone: "",
      gender: "",
      quantity: "",
      isFlightCreated: true
   });*/

   this.props.history.push({
     pathname: '/paymentmethod',
     state: {flight:databody, ticket:this.ticket, fromCheckIn:false}
   });
 };

 


  render() {
    if (this.state.isFlightCreated) {
      return <Redirect to ="/availableflights" />;
    }
  }

  render(){
    /* return (
      <div className="availableflights">
         Book the Flight
          <h1 className="text-center">{this.props.location.state.ticket.flight_name}</h1>
        <form >
       

        <p><label>First Name<input type="text" name="firstName" id="firstName" value={this.state.firstName} onChange={this.fnHandler} required></input></label></p>
        <p><label>Last Name<input type="text" name="lastName" id="lastName" value={this.state.lastName} onChange={this.lnHandler} required></input></label></p>
        <p><label>Email-id<input type="email" name="email" id="email" value={this.state.email} onChange={this.emHandler} required></input></label></p>
        <p><label>Mobile-No<input type="text" name="phone" id="phone" value={this.state.phone} onChange={this.phHandler} required></input></label></p>

       <p><label name="gender">Gender </label>
                <select name="gender" id="gender" value={this.state.gender} onChange={this.genderHandler}>
                <option value="Female">Female</option>
                <option value="Male">Male</option>
                </select></p>


<p><label>No of Seats<input type="number" name="quantity" id="quantity" value={this.state.quantity} onChange={this.quantityHandler} required></input></label></p>

      <button type="submit" onClick={this.submitHandler1}>Confirm</button>

      </form>
      </div>
    ) */

    return(
      <div className="col-md-12">
      <div className="card card-container">
      
  
        <Form>
          <div className="form-group">
            <label htmlFor="firstName">First Name*</label>
            <Input
              type="text"
              required pattern="[a-zA-Z]+"
              oninvalid="setCustomValidity('Please enter on alphabets only')"
              name="firstName"
              id="firstName"
              className="form-control"
              value={this.state.firstName}
               onChange={this.fnHandler}
               validations={[required]}
             
            />
          </div>
  
          <div className="form-group">
            <label htmlFor="lastName">Last Name*</label>
            <Input
              type="text"
              required pattern="[a-zA-Z]+" 
              oninvalid="setCustomValidity('Please enter on alphabets only. ')"
              className="form-control"
              name="lastName" 
              id="lastName"
              value={this.state.lastName} 
              onChange={this.lnHandler} required
            
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email-Id*</label>
            <Input
              type="email"
              className="form-control"
              name="email"
              id="email"
               value={this.state.email} 
               onChange={this.emHandler} required
            
            />
          </div>

          <div className="form-group">
            <label htmlFor="phone">Mobile No.*</label>
            <Input
              type="text"
              className="form-control"
              name="phone"
              id="phone"
               value={this.state.phone} 
               onChange={this.phHandler} required
            
            />
          </div>
          <div className="form-group">
            <label htmlFor="gender">Gender</label>
            <select  className="form-control" name="gender" id="gender" value={this.state.gender} onChange={this.genderHandler}>
                <option value="Female">Female</option>
                <option value="Male">Male</option>
                </select>
          </div>

          <div className="form-group">
            <label htmlFor="quantity">No. of Seats*</label>
            <Input
              type="number"
              className="form-control"
              name="quantity"
              id="quantity"
               value={this.state.quantity} 
               onChange={this.quantityHandler} required
            
            />
            </div>
  
          <div className="form-group">
            <button
              className="btn btn-primary btn-block"
              disabled={this.state.loading}
              onClick={this.submitHandler1}
            >
              {this.state.loading && (
                <span className="spinner-border spinner-border-sm"></span>
              )}
              <span>Submit</span>
            </button>
          </div>
  
         {/*  {this.state.message && (
            <div className="form-group">
              <div className="alert alert-danger" role="alert">
                {this.state.message}
              </div>
            </div>
          )} */}
         {/*  <CheckButton
            style={{ display: "none" }}
            ref={c => {
              this.checkBtn = c;
            }}
          /> */}
        </Form>
      </div>
    </div>
  );

  }
}

export default Booking





