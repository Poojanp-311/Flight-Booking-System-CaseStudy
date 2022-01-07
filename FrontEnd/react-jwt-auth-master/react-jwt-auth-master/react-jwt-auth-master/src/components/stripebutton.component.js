/*import React from "react";
import StripeCheckout from "react-stripe-checkout";
import axios from "axios";
import { useHistory } from "react-router-dom";

const StripeButton = ({ price , databody}) => {
  const publishableKey = "pk_test_51JfLviSBSPne9iHTc5k3V6B4skxZGN6dZBCV42GwNwfix25DF7bQ4O6yOYoDxWtb9zGbI78P2u8k6oEbZfOYEAqm005xKCjHyH";
  const stripePrice = price * 100 ;
  const history = useHistory()
  let data={}

  const onToken = (token) => {
    console.log(token);
    console.log(databody);
   
    axios
      // .post("http://localhost:8089/payment", {
        .post("http://localhost:9001/payment", {
        amount: stripePrice,
        token,
      })
      .then((response) => {
        console.log(response);
        alert("payment success");
      })
      .catch((error) => {
        console.log(error);
       
        alert("Payment success");
        //axios.post("http://localhost:8082/passengers",databody)
         axios.post("http://localhost:9001/passengers",databody)
      
      .then(response => {console.log(response);
        history.push({
        pathname:`/thankyou`,
        state: {_id: response.data.id}})})
      .catch(error => console.log(error))
      
    });

     history.push({
      pathname:`/thankyou`,
      
  });   

  };

  return (
    <StripeCheckout
      amount={stripePrice}
      label="Pay Now"
      image="https://svgshare.com/i/CUz.svg"
      description={`Your total is ${price}`}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishableKey}
      currency="INR"
    />
  );
};

export default StripeButton;

*/



import React from "react";
import StripeCheckout from "react-stripe-checkout";
import axios from "axios";
import { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css'; // Import css
import { useHistory } from "react-router-dom";

const StripeButton = ({ price , databody}) => {
  const publishableKey = "pk_test_51JfLviSBSPne9iHTc5k3V6B4skxZGN6dZBCV42GwNwfix25DF7bQ4O6yOYoDxWtb9zGbI78P2u8k6oEbZfOYEAqm005xKCjHyH";
  const stripePrice = price * 100 ;
  const history = useHistory()
  let data={}

  const onToken = (token) => {
    console.log(token);
    console.log(databody);
   
    axios
      // .post("http://localhost:8089/payment", {
        .post("http://localhost:9001/payment", {
        amount: stripePrice,
        token,
      })
      .then((response) => {
        console.log(response);
       // alert("payment success");

       confirmAlert({
        title: 'Payment Confirmed',
        message: 'Thank you for Payment',
        buttons: [
          {
            label: 'OK',
            //onClick: () => alert('Click No')
          },
          {
            //label: 'No',
            //onClick: () => alert('Click No')
          }
        ]
      });

          axios.post("http://localhost:9001/passengers",databody)
          .then(response => {console.log(response);history.push({
            pathname:'/thankyou',
            state: {_id: response.data.id}})})
          .catch(error => console.log(error))
         
      })
      .catch((error) => {
        console.log(error);
        alert("Payment success");
      })
  };

  return (
    <StripeCheckout
      amount={stripePrice}
      label="Pay Now"
      image="https://svgshare.com/i/CUz.svg"
      description={`Your total is ${price}`}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishableKey}
      currency="INR"
    />
  );
};

export default StripeButton;
