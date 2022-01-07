
import React, { Component } from 'react'
import axios from 'axios'
import { Button} from 'react-bootstrap';
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";





class SearchComponent extends Component {

 

  constructor(props) {
    super(props)
  
    this.state = {
      departure_city: "NYC",
      arrival_city: "SFO",
      departure_date: "",
      tickets: []
    }
  }

  

  /* changeHandler1 = (e) =>{
    this.setState({
        departure_city: e.target.value
    });
} */

  changeHandler1 = (e) =>{

    /* let nam = e.target.name;
    let val = e.target.value;
    if (nam === "departure_city") {
      if (!Number(val)) {
        alert("departure city must be a number");
      }
    } */
   
    this.setState({
        departure_city: e.target.value.replace(/[^a-zA-Z]/ig,'')
        //departure_city: e.target.value
    });
}

changeHandler2 = (e) =>{
    this.setState({
        arrival_city: e.target.value.replace(/[^a-zA-Z]/ig,'')
    });
}

dateHandler = (e) =>{
    this.setState({
        departure_date: e.target.value
    });
}


submitHandler=(e) => {
  e.preventDefault()
  console.log("Pooja")
    // axios.get("http://localhost:8081/flights/"+this.state.departure_city+"/"+this.state.arrival_city+"/"+this.state.departure_date)
    axios.get("http://localhost:9001/flights/"+this.state.departure_city+"/"+this.state.arrival_city+"/"+this.state.departure_date)
    .then(response => 
      {console.log(response.data)
      this.setState({tickets:response.data
      });
this.props.history.push({
    pathname: '/availableflights',
    state: {tickets: response.data}
});

    })
    .catch(error=> console.log(error))
  } 


  /* submitHandler=(e) => {
    e.preventDefault()
    console.log("Pooja")
      axios.get("http://localhost:8081/flights/"+this.state.departure_city+"/"+this.state.arrival_city+"/"+this.state.departure_date)
      .then(response => 
        {console.log(response.data)
        this.setState({tickets:response.data
        });

        let departure_city = this.departure_city
        if (departure_city === ""){
          alert("SOURCE cannot be empty");
  this.props.history.push({
      pathname: '/about',
      state: {tickets: response.data}
  });}else if (departure_city !== "") {
    sessionStorage.setItem(DEPARTURE_CITY, departure_city);
    this.props.history.push({
      pathname: '/availableflights',
      state: {tickets: response.data}
  });
}
      })
      .catch(error=> console.log(error))
    }  */
  


  
  render() {
     /* return (
      <div className="search">
        <form onSubmit={this.submitHandler} action="/">
        <b><label htmlFor="departure_city">Travelling From</label></b>
        <input type="text" name="departure_city" value={this.state.departure_city} onChange={this.changeHandler1} required></input>
        <b><label>Going To<input type="text" name="arrival_city" value={this.state.arrival_city} onChange={this.changeHandler2} required></input></label></b>
        <b><label>Planning on<input type="text" name="departure_date" placeholder="dd-mm-yyyy" value={this.state.departure_date} onChange={this.dateHandler} required></input></label></b>
        <Button variant="primary">Submit</Button>{' '}
       
        </form>
      </div>
     
    )  */
   return(
    <div className="col-md-12">
    <div className="card card-container">
    

      <Form
       onSubmit={this.submitHandler} action="/"
       
      >
        <div className="form-group">
          <label htmlFor="departure_city">Travelling From</label>
          <select
            
            name="departure_city"
            className="form-control"
            value={this.state.departure_city}
             onChange={this.changeHandler1} required>
               <option value="NYC">NYC</option>
               <option value="Malaysia">Malaysia</option>
               <option value="Austin">Austin</option>
               <option value="Delhi">Delhi</option>
               <option value="Mumbai">Mumbai</option>
               <option value="Bangalore">Bangalore</option>

          </select>
        </div>

        <div className="form-group">
          <label htmlFor="arrival_city">Going To</label>
          <select
           
            className="form-control"
            name="arrival_city" 
            value={this.state.arrival_city} 
            onChange={this.changeHandler2} required>
              <option value="SFO">SFO</option>
              <option value="Thailand">Thailand</option>
              <option value="Bangkok">Bangkok</option>
               <option value="Chicago">Chicago</option>
               <option value="Paris">Paris</option>
               <option value="Berlin">Berlin</option>
            </select>
          
          
        </div>
        <div className="form-group">
          <label htmlFor="departure_date">Planning On</label>
          <Input
            type="date"
            className="form-control"
            name="departure_date"
            //placeholder="DD-MM-YYYY" 
             value={this.state.departure_date} 
             onChange={this.dateHandler} required
          
          />
        </div>

        <div className="form-group">
          <button
            className="btn btn-primary btn-block"
            disabled={this.state.loading}
          >
            {this.state.loading && (
              <span className="spinner-border spinner-border-sm"></span>
            )}
            <span>Submit</span>
          </button>
        </div>

       
      </Form>
      
     
    </div>
  </div>
);
  }
}

export default SearchComponent
