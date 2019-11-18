import React from "react";
import { FormGroup, Button, Input } from "reactstrap";
class Contact extends React.Component {
  render() {
    return (
      <div className="body">
        <FormGroup>
          <Input type="email" placeholder="Email" />
        </FormGroup>
        <FormGroup>
          <Input type="password" placeholder="password" />
        </FormGroup>
        <Button>Login</Button>
      </div>
    );
  }
}

export default Contact;
