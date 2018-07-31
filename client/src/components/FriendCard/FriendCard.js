import React from "react";
import { Col, Row, Container } from "../../components/Grid";
import Card from "../../components/Card";
import ProfilePhoto from "../../components/ProfilePhoto";
import Weather from "../../components/Weather";
import News from "../../components/Weather";
import "./FriendCard.css";

const FriendCard = props => (
    <Card>
        <Row>
            <Col size="md-12">
                <ProfilePhoto
                    name={props.name}
                    profile_pic={props.profile_pic}
                />
                <div>
                    Name: {props.name}
                </div>
                <Weather 
                    location={props.location}
                />
            </Col>
        </Row>
        <Row>
            <Col size="md-12">
                <div>
                    Reminder: {props.reminder}
                </div>
            </Col>
        </Row>
        <Row>
            <Col size="md-12">
                <News 
                    location={props.location}
                />
            </Col>
        </Row>
    </Card>
);

export default FriendCard;
