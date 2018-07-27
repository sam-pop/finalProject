import React from "react";
import { Col, Row, Container } from "../../components/Grid";
import { Card } from "../../components/Card";
import ProfilePhoto from "../../components/ProfilePhoto";
import Weather from "../../components/Weather";
import News from "../../components/Weather";
import "./FriendCard.css";

const FriendCard = props => (
    <Card>
        <Row>
            <Col size="md-12">
                <ProfilePhoto />
                <Weather />
            </Col>
        </Row>
        <Row>
            <Col size="md-12">
                <News />
            </Col>
        </Row>
    </Card>
);

export default FriendCard;
