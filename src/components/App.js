import React, { Component } from "react";
import "./App.css";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import axios from "axios";

import Result from "./Result";

class App extends Component {
  state = {
    error: "",
    limit: "",
    isLoading: false,
    medianPrimes: []
  };

  handleChange = event => {
    this.setState({
      limit: event.target.value
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    const limit = this.state.limit;

    if (limit === "") {
      return;
    }

    if (isNaN(limit)) {
      return this.setState({
        error: "Limit must be a number",
        medianPrimes: []
      });
    }

    return this.getMedianPrimes(limit);
  };

  getMedianPrimes = limit => {
    this.setState({ isLoading: true });
    return axios
      .get(`http://localhost:4040/median-prime/${limit}`)
      .then(response => {
        this.setState({
          error: "",
          isLoading: false,
          medianPrimes: response.data
        });
      })
      .catch(({ response }) => {
        const errorMessage = response
          ? response.data.message
          : "Something went wrong";
        this.setState({
          error: errorMessage,
          medianPrimes: [],
          isLoading: false
        });
      });
  };

  render() {
    return (
      <div className="App">
        <div style={{ marginBottom: "20px" }}>
          <h1>Find the median primes</h1>
        </div>

        <div className="form-container">
          <Form onSubmit={this.handleSubmit}>
            <Form.Row>
              <Col>
                <Form.Control
                  id="limit"
                  name="limit"
                  autoComplete="off"
                  style={{ marginBottom: "10px" }}
                  onChange={this.handleChange}
                  placeholder="Enter a number"
                  value={this.state.limit}
                />
                {this.state.error && !this.state.isLoading && (
                  <div id="error" style={{ color: "red" }}>
                    <p>{this.state.error}</p>
                  </div>
                )}
              </Col>
              <Col xs={2}>
                <Button id="submit-btn" type="submit" variant="primary">
                  Get
                </Button>
              </Col>
            </Form.Row>
          </Form>
          {this.state.isLoading && <div className="loader" />}
          {this.state.medianPrimes.length > 0 && !this.state.isLoading && (
            <Result medianPrimes={this.state.medianPrimes} />
          )}
        </div>
      </div>
    );
  }
}

export default App;
