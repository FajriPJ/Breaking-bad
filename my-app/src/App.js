// import logo from './logo.svg';
import './App.css';
import React from 'react';
import { Container, Row, Col, Image, Jumbotron, Button, Navbar, Form, InputGroup, FormControl } from 'react-bootstrap'

class App extends React.Component {
  constructor() {
    super()

    this.state = {
      name: 'jack'
    }
  }

  getDataFromServer = () => {
    fetch('https://breakingbadapi.com/api/characters')
      .then(res => res.json())
      .then(res => {
        console.log(res)
        this.setState({
          ...this.state,
          characters: res
        })
      })
      .catch(err => console.log(err))
  }

  componentDidMount() {
    this.getDataFromServer()
  }


  render() {
    return (
      <div>
        <h1>Hello, world</h1>
        <h2>{this.state.name}</h2>
        <div className="container">
          <Navbar className="bg-light justify-content-between">
            <Form inline>
              <InputGroup>
                <InputGroup.Prepend>
                  <InputGroup.Text id="basic-addon1">@</InputGroup.Text>
                </InputGroup.Prepend>
                <FormControl
                  placeholder="Username"
                  aria-label="Username"
                  aria-describedby="basic-addon1"
                />
              </InputGroup>
            </Form>
            <Form inline>
              <FormControl type="text" placeholder="Search" className=" mr-sm-2" />
              <Button type="submit">Submit</Button>
            </Form>
          </Navbar>

          <Jumbotron>
            <h1>Hello, world!</h1>
            <img src="https://images.unsplash.com/photo-1554454389-7bcde0df172a?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1050&q=80" alt="" />
            <p>
              This is a simple hero unit, a simple jumbotron-style component for calling
              extra attention to featured content or information.
            </p>
            <p>
              <Button variant="primary">Learn more</Button>
            </p>
          </Jumbotron>
        </div>
      </div>
    )
  }
}


export default App;
