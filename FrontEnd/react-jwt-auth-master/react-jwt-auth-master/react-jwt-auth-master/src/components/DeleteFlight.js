/*import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
//import AdminNavigationBar from "../components/adminNavigationBar";

export default class DeleteFlight extends Component {
  state = {
    posts: []
  };


  componentDidMount() {
    axios
      .post(
        "http://localhost:8081/flights/{flight_id}" +
          this.props.match.params.id
      )
      .then(response => {
        this.setState({
          alertMessage: "Flight Deleted Successfully"
        });
      })
      .catch(error => console.log(error.message));
  }

  render() {
    return (
      <div>
       
        <br /> <br />
        <div className="alert alert-success" role="alert">
          <h4 className="alert-heading">Well done!</h4>
          <h1>{this.state.alertMessage}</h1>
          <hr />
          <h3 className="mb-0">
            <Link to={"/flightlist"}> Go Back To Your Flight List.</Link>
          </h3>
        </div>
      </div>
    );
  }
}*/


import React from 'react';  
import { Card, Table } from 'react-bootstrap'
import axios from 'axios';  
import { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css'; // Import css
    
export default class DeleteTrain extends React.Component {  
  state = {  
    posts: []  
  }  
    
  componentDidMount() {  
    axios.get(`http://localhost:8064/admin/getflg`)  
      .then(res => {  
        const posts = res.data;  
        this.setState({ posts });  
      })  
  }  
    
  /* deleteRow(flight_id, e){  
    axios.delete(`http://localhost:8064/admin/deletflg/${flight_id}`)  
      .then(res => {  
        console.log(res);  
        console.log(res.data);  
    
        const posts = this.state.posts.filter(item => item.flight_id !== flight_id);  
        this.setState({ posts });  
      })  
    
  }  */
  deleteHandler= (flight_id, e) => {
        e.preventDefault()
       //window.alert("Do you want to cancel booking ?")
       confirmAlert({
        title: 'Confirm to delete',
        message: 'Are you sure to do this.',
        buttons: [
          {
            label: 'Yes',
            onClick: () => axios.delete(`http://localhost:8064/admin/deletflg/${flight_id}`) 
            .then(response => response)
            .catch(error => error.message)
          },
          {
            label: 'No',
            //onClick: () => alert('Click No')
          }
        ]
      }); 
       
       /*  axios.delete("http://localhost:9001/checkin/"+this.state._id)
        .then(response => 
            {console.log(response.data)
            this.setState({checkin: response.data
            })
        })
        .catch(err => console.log(err)) */

    }
  updateRow(post,e){
    e.preventDefault()
    this.props.history.push({
      pathname: `/updateflight`,
      state: {post: post}
    });
    console.log(post)
  }
 
  /* updateRow(flight_id, e){  
    axios.put(`http://localhost:8081/flights/${flight_id}`)  
      .then(res => {  
        console.log(res);  
        console.log(res.data);  
    
        const posts = this.state.posts.filter(item => item.flight_id !== flight_id);  
        this.setState({ posts });  
      })  
    
  }  */
    
  render() {  
    return (  
      <div >
        <Card className = "border bg-dark border-light text-light">  
        <h3> Delete Flight </h3>  
    
        <Table striped bordered hover variant="light">
            <thead>  
              <tr>  
                  <th>Flight id</th>  
                  <th>Flight Name</th>  
                  <th>Flight No.</th> 
                  <th>Source</th>  
                  <th>Destination</th> 
                  <th>Departure Date</th>
                  <th>Departure Time</th>
                  <th>Fare</th>
              </tr>  
            </thead>  
    
            <tbody>  
              {this.state.posts.map((post) => (  
                <tr>  
                  <td>{post.flight_id}</td>  
                  <td>{post.flight_name}</td>  
                  <td>{post.flight_no}</td>  
                  <td>{post.departure_city}</td>
                  <td>{post.arrival_city}</td>
                  <td>{post.departure_date}</td>
                  <td>{post.departure_time}</td>
                  <td>{post.fare}</td>

                  {/* <td>  
                    <button className="btn btn-danger" onClick={(e) =>
                     {if(window.confirm('Confirm to Delete ?'))this.deleteRow(post.flight_id, e)
                    }}>Delete</button>  
                  </td>   */}

<button className="btn btn-danger" onClick={(e)=>this.deleteHandler(post.flight_id, e)} >Delete</button>

                   
                  <td><button className="btn btn-primary" onClick={(e)=> {this.updateRow(post, e)}}>Update</button></td> 
                   
                </tr>  
              ))}  
            </tbody>  
    
        </Table> 
        </Card> 
      </div>  
    )  
  }  
}