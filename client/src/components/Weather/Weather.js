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
        API.getWeather(this.props.location[1][0], this.props.location[1][1])
            .then(res => 
                this.setState({ 
                    degrees: res.data.currently.temperature + "° F"
                })
            )
            .catch(err => console.log(err));
    };

    render() {
        return (
            <Container>
                <Row>
                    <Col size="md-12">
                        <div>
                            {this.state.degrees}
                        </div>
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default Weather;
