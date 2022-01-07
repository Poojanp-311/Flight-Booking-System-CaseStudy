/*import logo from './logo.svg';
import React, { Component } from "react";
import { Switch, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import SearchComponent from './components/SearchComponent';
import Booking from './components/Booking';

import "bootstrap/dist/css/bootstrap.min.css";
import AvailableFlights from './components/AvailableFlights';
import CheckIn from './components/CheckIn';

import About from './components/About';
import AuthService from "./services/auth.service";

import Login from "./components/login.component";
import Register from "./components/register.component";
import Home from "./components/home.component";
import Profile from "./components/profile.component";
import BoardUser from "./components/board-user.component";
import BoardAdmin from "./components/board-admin.component";
import PaymentMethod from './components/PaymentMethod';
import ThankYou from './components/ThankYou';



import EventBus from "./common/EventBus";
import CreateFlight from './components/CreateFlight';
import DeleteFlight from './components/DeleteFlight';
import FlightList from './components/FlightList';


class App extends Component {
  constructor(props) {
    super(props);
    this.logOut = this.logOut.bind(this);

    this.state = {
     // showModeratorBoard: false,
      showAdminBoard: false,
      currentUser: undefined
    };
  }

  componentDidMount() {
    const user = AuthService.getCurrentUser();

    if (user) {
      this.setState({
        currentUser: user,
        //showModeratorBoard: user.roles.includes("ROLE_MODERATOR"),
        showAdminBoard: user.roles.includes("ROLE_ADMIN")
      });
    }
    
    EventBus.on("logout", () => {
      this.logOut();
    });
  }

  componentWillUnmount() {
    EventBus.remove("logout");
  }

  logOut() {
    AuthService.logout();
    this.setState({
     // showModeratorBoard: false,
      showAdminBoard: false,
      currentUser: undefined
    });
  }

  render() {
   // const { currentUser, showModeratorBoard, showAdminBoard } = this.state;
   const { currentUser, showAdminBoard } = this.state;

    return (
      <div className="header">
        <nav className="navbar navbar-expand navbar-dark bg-dark">
          <Link to={"/"} className="navbar-brand">
            IndoAirlines!
          </Link>
          <div className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link to={"/home"} className="nav-link">
                Home
              </Link>
            </li>
            <div className="navbar-nav mr-auto">
          <li className="nav-item">
              <Link to={"/about"} className="nav-link">
                About   
                 </Link>
            </li>
            
            
           

            {showAdminBoard && (
              <li className="nav-item">
                <Link to={"/admin"} className="nav-link">
                  Admin Board
                </Link>
              </li>

              
            )}
{showAdminBoard && (
            <li className="nav-item">
              <Link to={"/createflight"} className="nav-link">
               Create Flight  
                 </Link>
            </li>
)}


{showAdminBoard && (
<li className="nav-item">
              <Link to={"/deleteflight"} className="nav-link">
               Delete Flight  
                 </Link>
            </li>

)}
              
            
            {currentUser && (
              <li className="nav-item">
                <Link to={"/checkin"} className="nav-link">
                  CheckIn
                </Link>
              </li>
            )}
          </div>
          </div>

          {currentUser ? (
            <div className="navbar-nav ml-auto">

            <li className="nav-item">
              <Link to={"/search"} className="nav-link">
                  Search
                </Link>
              </li>
              
             
              

              <li className="nav-item">
                <Link to={"/profile"} className="nav-link">
                  {currentUser.username}
                </Link>
              </li>
              <li className="nav-item">
                <a href="/login" className="nav-link" onClick={this.logOut}>
                  LogOut
                </a>
              </li>
            </div>
          ) : (
            <div className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link to={"/login"} className="nav-link">
                  Login
                </Link>
              </li>

              <li className="nav-item">
                <Link to={"/register"} className="nav-link">
                  Sign Up
                </Link>
              </li>
            </div>
          )}
        </nav>

        <div className="container mt-3">
          <Switch>
            <Route exact path={["/", "/home"]} component={Home} />
            <Route exact path="/about" component={About} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/register" component={Register} />
            <Route exact path="/profile" component={Profile} />
            <Route path="/user" component={BoardUser} />
            <Route path="/admin" component={BoardAdmin} />
            <Route exact path="/search" component={SearchComponent} />
            <Route path="/availableflights" component={AvailableFlights} />
            <Route path="/booking"  component={Booking}/>
            <Route path="/login"  component={Login}/>
            <Route path="/checkin"  component={CheckIn}/>
            <Route path="/paymentmethod"  component={PaymentMethod}/>
            <Route path="/thankyou"  component={ThankYou}/>
            <Route path="/createflight"  component={CreateFlight}/>
            <Route path="/deleteflight"  component={DeleteFlight}/>
           
           
          </Switch>
        </div>

     
      </div>
    );
  }
}

export default App;

*/



import logo from './logo.svg';
import React, { Component } from "react";
import { Switch, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import SearchComponent from './components/SearchComponent';
import Booking from './components/Booking';

import "bootstrap/dist/css/bootstrap.min.css";
import AvailableFlights from './components/AvailableFlights';
import CheckIn from './components/CheckIn';

import About from './components/About';
import AuthService from "./services/auth.service";

import Login from "./components/login.component";
import Register from "./components/register.component";
import Home from "./components/home.component";
import Profile from "./components/profile.component";
import BoardUser from "./components/board-user.component";
import BoardAdmin from "./components/board-admin.component";
import PaymentMethod from './components/PaymentMethod';
import ThankYou from './components/ThankYou';



import EventBus from "./common/EventBus";
import CreateFlight from './components/CreateFlight';
import DeleteFlight from './components/DeleteFlight';
import UpdateFlight from './components/UpdateFlight';
import FlightList from './components/FlightList';


class App extends Component {
  constructor(props) {
    super(props);
    this.logOut = this.logOut.bind(this);

    this.state = {
     // showModeratorBoard: false,
     showAdminBoard: false,
     showUserBoard: false,
      currentUser: undefined
    };
  }

  componentDidMount() {
    const user = AuthService.getCurrentUser();

    if (user) {
      this.setState({
        currentUser: user,
        //showModeratorBoard: user.roles.includes("ROLE_MODERATOR"),
        showAdminBoard: user.roles.includes("ROLE_ADMIN"),
        showUserBoard: user.roles.includes("ROLE_USER")
      });
    }
    
    EventBus.on("logout", () => {
      this.logOut();
    });
  }

  componentWillUnmount() {
    EventBus.remove("logout");
  }

  logOut() {
    AuthService.logout();
    this.setState({
     // showModeratorBoard: false,
      showAdminBoard: false,
      showUserBoard: false,
      currentUser: undefined
    });
  }

  render() {
   // const { currentUser, showModeratorBoard, showAdminBoard } = this.state;
   const { currentUser, showAdminBoard, showUserBoard} = this.state;

    return (
      <div className="header">
        <nav className="navbar navbar-expand navbar-dark bg-dark">
          <Link to={"/"} className="navbar-brand">
            IndoAirlines!
          </Link>
          <div className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link to={"/home"} className="nav-link">
                Home
              </Link>
            </li>
            <div className="navbar-nav mr-auto">
          <li className="nav-item">
              <Link to={"/about"} className="nav-link">
                About   
                 </Link>
            </li>
            

           {/*  {showAdminBoard && (
              <li className="nav-item">
                <Link to={"/admin"} className="nav-link">
                  Admin Board
                </Link>
              </li>

              
            )} */}
{showAdminBoard && (
            <li className="nav-item">
              <Link to={"/createflight"} className="nav-link">
               Create Flight  
                 </Link>
            </li>
)}

 {showAdminBoard && (
<li className="nav-item">
              <Link to={"/deleteflight"} className="nav-link">
               Delete/Edit Flight  
                 </Link>
            </li>

)} 
               {showUserBoard && (
             <li className="nav-item">
                <Link to={"/search"} className="nav-link">
                  Search
                </Link>
              </li>
            )}

{showUserBoard && (
             <li className="nav-item">
                <Link to={"/checkin"} className="nav-link">
                  CheckIn
                </Link>
              </li>
            )}


            
          {/* {currentUser && (
              <li className="nav-item">
                <Link to={"/checkin"} className="nav-link">
                  CheckIn
                </Link>
              </li>
            )} */}
          </div>
          </div>
          

          {currentUser ? (
            <div className="navbar-nav ml-auto">

           {/*  <li className="nav-item">
              <Link to={"/search"} className="nav-link">
                  Search
                </Link>
              </li>
               */}
             
              <li className="nav-item">
                <Link to={"/profile"} className="nav-link">
                  {currentUser.username}
                </Link>
              </li>
              <li className="nav-item">
                <a href="/login" className="nav-link" onClick={this.logOut}>
                  LogOut
                </a>
              </li>
            </div>
          ) : (
            <div className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link to={"/login"} className="nav-link">
                  Login
                </Link>
              </li>

              <li className="nav-item">
                <Link to={"/register"} className="nav-link">
                  Sign Up
                </Link>
              </li>
            </div>
          )}
        </nav>

        <div className="container mt-3">
          <Switch>
            <Route exact path={["/", "/home"]} component={Home} />
            <Route exact path="/about" component={About} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/register" component={Register} />
            <Route exact path="/profile" component={Profile} />
            <Route path="/user" component={BoardUser} />
            <Route path="/admin" component={BoardAdmin} />
            <Route exact path="/search" component={SearchComponent} />
            <Route path="/availableflights" component={AvailableFlights} />
            <Route path="/booking"  component={Booking}/>
            <Route path="/createflight"  component={CreateFlight}/>
            <Route path="/deleteflight"  component={DeleteFlight}/>
            <Route path="/updateflight"  component={UpdateFlight}/>
            <Route path="/login"  component={Login}/>
            <Route path="/checkin"  component={CheckIn}/>
            <Route path="/paymentmethod"  component={PaymentMethod}/>
            <Route path="/thankyou"  component={ThankYou}/>
            
           
           
          </Switch>
        </div>

     
      </div>
    );
  }
}

export default App;



