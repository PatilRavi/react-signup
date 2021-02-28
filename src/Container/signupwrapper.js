import React, { Component } from "react";
import axios from "axios";

import Signup from "./../Presentational/form";

class Wrapper extends Component {
  constructor(props) {
    super(props);
  }
  delay = (ms) => {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  handleClick = async (fName, lName, email, password) => {
    console.log("clicked", fName, lName, email, password);
    const apiBaseUrl = "https://demo-api.now.sh/users";

    //To be done:check for empty values before hitting submit
    if (fName && lName && email && password.length > 7) {
      if (password === fName || password === lName) { // compare pwd with fName & lName
        alert("Password should not contain user’s first or last name");
      } else {
        const payload = {
          firstName: fName,
          lastName: lName,
          email: email,
          password: password
        };
        const { status } = await axios.post(apiBaseUrl, payload);
        if (status !== 200)
          console.log("Error ocurred", status)
        else
          await this.delay(4000);
          const userData = await axios.get(apiBaseUrl);
          console.log("I got here about 4000 milliseconds later", userData)       
      }
    } else {
      alert("Input field value is missing");
    }
  };

  render() {
    return <Signup submitHandler={this.handleClick} />
  }
}

export default Wrapper;
