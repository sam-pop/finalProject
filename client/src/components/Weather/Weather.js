import React, { Component } from "react";
import API from "../../utils/API";
import { Col, Row, Container } from "../../components/Grid";

class Weather extends Component {
  state = {
    degrees: ""
  };

  componentDidMount() {
    this.loadWeather();
  }

  loadWeather = () => {
    API.getWeather(this.props.lat, this.props.lng)
      .then(res => 
        this.setState({
            degrees: res + "° F"
        })
    )
    .catch(err => console.log(err));
    console.log("!!!!!!!!!!!!! " + this.state.degrees);
};

render() {
    return (
        <Container>
        <Row>
          <Col size="md-12">
            <div>Temp: {this.state.degrees}</div>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Weather;
