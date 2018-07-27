import React, { Component } from "react";
import API from "../../utils/API";
import { Col, Row, Container } from "../../components/Grid";
import { List, ListItem } from "../../components/List";

class Home extends Component {
    state = {
        friends: []
    };

    componentDidMount() {

    }

    render() {
        return (
            <Container fluid>
                <Row>
                    <Col size="md-12">

                    </Col>
                    <Col size="md-12">

                    </Col>
                </Row>
            </Container>
        );
    }
}

export default Home;