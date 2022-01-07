import React, { Component } from "react";
import { Link } from "react-router-dom";
//import thankyouimg from "../resources/back7edit.jpg";
import { json } from "body-parser";
import axios from 'axios'



class ThankYou extends Component {

  constructor(props) {
    super(props)
    this.data=this.props.location.state._id
    
}

componentDidMount() {
    axios
      .get("http://localhost:8087/api/sendEmailwithAttachment")
     
  }



  redirectHandler = (e) => {
    e.preventDefault()
        this.props.history.push(`/home`)
  }

  render() {
    return (
        <div>
            <br/>
            <div  className= "ty-container">
            <div className="text-center" style={{color:'black'}}>
            <h3>Thankyou!</h3><br/><br/>
            Your Booking has been confirmed <br/>
           {/* Booking Id :{this.data}<br/>   */}
      Booking Id: 66<br/> 
            Payment Confirmation has been sent to your mail id<br/>
            You can view your details with CheckIn <br/>
            <br></br>
            <button className="btn btn-primary" type="submit" onClick={this.redirectHandler}>HomePage</button><br/>
            </div>
            </div>
        </div>
    )
}
}
  /* render() {
    return (
      <div>
        <center>
          <h2> You will get the affirmation message by Email Soon.</h2>
          <img src={thankyouimg} width="1000" />
          <Link
            to="/"
            style={{
              backgroundColor: "#6900cb",
              color: "white",
              padding: 25,
              paddingRight: 30,
              fontSize: 40
            }}
          >
            {" "}
            Go to Home{" "}
          </Link>
        </center>
      </div>
    );
  }
} */



export default ThankYou;