import React, { Component } from "react";
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button';
import axios from 'axios';


export default class SignUp extends Component {

  constructor(props) {
    super(props)

    // Setting up functions
    this.onChangeName = this.onChangeName.bind(this);
    this.onChangeEmail = this.onChangeEmail.bind(this);
    this.onChangePassword = this.onChangePassword.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    // Setting up state
    this.state = {
      Name: '',
      Email: '',
      Password: ''
    }
  }

  
  onChangeName(e) {
    this.setState({ Name: e.target.value })
  }

  onChangeEmail(e) {
    this.setState({ Email: e.target.value })
  }

  onChangePassword(e) {
    this.setState({ Password: e.target.value })
  }

  onSubmit(e) {
    e.preventDefault()

    const signupObject = {
      Name: this.state.Name,
      Email: this.state.Email,
      Password: this.state.Password
    };
    axios.post('http://localhost:3000', signupObject)
      .then(res => console.log(res.data));

    this.setState({Name: '', Email: '', Password: ''})
  }

  render() {
    return (<div className="form-wrapper">
        <h2>SignUp</h2>
      <Form onSubmit={this.onSubmit}>
      <Form.Group controlId="Name">
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" value={this.state.Name} onChange={this.onChangeName} />
        </Form.Group>

        <Form.Group controlId="Email">
          <Form.Label>Email</Form.Label>
          <Form.Control type="text" value={this.state.Email} onChange={this.onChangeEmail} />
        </Form.Group>

        <Form.Group controlId="Password">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" value={this.state.Password} onChange={this.onChangePassword} />
        </Form.Group>

        <Button variant="danger" size="lg" block="block" type="submit" className="mt-4">
          SignUp
        </Button>
      </Form>
    </div>);
  }
}