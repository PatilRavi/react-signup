import React, { Component } from "react";
import "./../style.css";

import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import AppBar from "material-ui/AppBar";
import RaisedButton from "material-ui/RaisedButton";
import TextField from "material-ui/TextField";
import axios from 'axios';

class Wrapper extends Component {
  constructor(props) {
    super(props);
    this.state = {
      first_name: "",
      last_name: "",
      email: "",
      password: ""
    };
  }

  handleClick = async event => {
    console.log("cliced", event);
    const apiBaseUrl = "https://demo-api.now.sh/users";
    const self = this;
    //To be done:check for empty values before hitting submit
    if (
      self.state.first_name.length > 0 &&
      self.state.last_name.length > 0 &&
      self.state.email.length > 0 &&
      self.state.password.length > 7
    ) {
      if ( self.state.password === self.state.first_name || self.state.password === self.state.last_name
      ) {
        alert("Password should not contain user’s first or last name");
      } else {
        const payload = {
          first_name: self.state.first_name,
          last_name: self.state.last_name,
          userid: self.state.email,
          password: self.state.password
        };
        const { status } = await axios.post(apiBaseUrl, payload)
        status !== 200 ? console.log("Error ocurred", status) : console.log("registration successfull");        
      }      
    } else {
      alert("Input field value is missing");
    }
  };
  
  render() {
    return (
      <div>
        <MuiThemeProvider>          
            <AppBar title="Sign up" />
            <TextField
              hintText="Enter your First Name"
              floatingLabelText="First Name"
              onChange={(event, newValue) =>
                this.setState({ first_name: newValue })
              }
            />
            <br />
            <TextField
              hintText="Enter your Last Name"
              floatingLabelText="Last Name"
              onChange={(event, newValue) =>
                this.setState({ last_name: newValue })
              }
            />
            <br />
            <TextField
              hintText="Enter your email id"
              floatingLabelText="Email Id"
              onChange={(event, newValue) => this.setState({ email: newValue })}
            />
            <br />
            <TextField
              type="password"
              hintText="Enter your Password"
              floatingLabelText="Password"
              onChange={(event, newValue) =>
                this.setState({ password: newValue })
              }
            />
            <br />
            <RaisedButton
              label="Submit"
              primary={true}
              onClick={event => this.handleClick(event)}
            />
        </MuiThemeProvider>
      </div>
    );
  }
}

export default Wrapper;
