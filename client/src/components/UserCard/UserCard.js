import React from "react";
import { Col, Row, Container } from "../../components/Grid";
import Card from "../../components/Card";
import ProfilePhoto from "../../components/ProfilePhoto";
import "./UserCard.css";

const UserCard = props => {
    <Card>
        <Row>
            <Col size="md-4">
                <ProfilePhoto
                    name={props.name}
                    profile_pic={props.profile_pic}
                />
            </Col>
            <Col size="md-8">
                <Row>
                    <Col size="md-12">
                        Name: {props.name}
                    </Col>
                </Row>
                <Row>
                    <Col size="md-12">
                        Location: {props.location}
                    </Col>
                </Row>
            </Col>
        </Row>
    </Card>
};

export default UserCard;

