import React from "react";
import { Col, Row } from "../../components/Grid";
import Card from "../../components/Card";
import ProfilePhoto from "../../components/ProfilePhoto";
import Weather from "../../components/Weather";
import News from "../../components/News";
import "./FriendCard.css";

const FriendCard = props => (
  <Card className="card">
    <Row>
      <Col size="md-3"  style={{paddingRight: 10}}>
        <ProfilePhoto name={props.name} profile_pic={props.profile_pic} />
      </Col>
      <Col size="md-9">
        <Row>
          <Col size="md-12">Name: {props.name}</Col>
        </Row>
        <Row>
          <Col size="md-12">Location: {props.location}</Col>
        </Row>
        <Row>
          <Col size="md-12">
            <div>Note: {props.note}</div>
          </Col>
        </Row>

        <Weather lat={props.lat} lng={props.lng} />
      </Col>
  
    </Row>
    <Row />
    <Row>
      <Col size="md-12">
        <News location={props.location} />
      </Col>
    </Row>
  </Card>
);

export default FriendCard;
