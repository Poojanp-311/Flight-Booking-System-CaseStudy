import React, { Component } from "react";
import axios from "axios";
//import paytmlogo from "../resources/paytm.png";
//import image
//import { TOTAL } from "./PaymentMethod";

class Payment extends Component {
  

  render() {
    return (
      <div>
         <p><label>Mobile No<input type="text" name="fourdigitpin" id="fourdigitpin"  required></input></label></p>
      <p><label>Four Digit Pin<input type="text" name="fourdigitpin" id="fourdigitpin"  required></input></label></p>
      <p><label>Amount<input type="text" name="amount" id="amount" required></input></label></p>
      <p><label>Total<input type="text" name="total" id="total"  required></input></label></p>

      <button type="submit" onClick={this.paymentHandler}>Pay</button>
      </div>
    );
  }
}

export default Payment;