import React, { useState } from 'react';

import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import AppBar from "material-ui/AppBar";
import RaisedButton from "material-ui/RaisedButton";
import TextField from "material-ui/TextField";

const Signup = ({ submitHandler }) => {
  const [fName, setfName] = useState("");
  const [lName, setlName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <MuiThemeProvider>          
      <AppBar title="Sign up" />
      <TextField
        hintText="Enter your First Name"
        floatingLabelText="First Name"
        onChange={(event, newValue) => setfName(newValue)}
      />
      <br />
      <TextField
        hintText="Enter your Last Name"
        floatingLabelText="Last Name"
        onChange={(event, newValue) =>setlName(newValue)}
      />
      <br />
      <TextField
        hintText="Enter your email id"
        floatingLabelText="Email Id"
        onChange={(event, newValue) => setEmail(newValue)}
      />
      <br />
      <TextField
        type="password"
        hintText="Enter your Password"
        floatingLabelText="Password"
        onChange={(event, newValue) => setPassword(newValue)}
      />
      <br />
      <RaisedButton
        label="Submit"
        primary={true}
        onClick={event => submitHandler(fName, lName, email, password)}
      />
    </MuiThemeProvider>
  );
};
export default Signup;