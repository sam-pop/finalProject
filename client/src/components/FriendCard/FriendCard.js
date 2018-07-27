import React from "react";
import { Col, Row, Container } from "../../components/Grid";
import ProfilePhoto from "../../components/ProfilePhoto";
import "./FriendCard.css";

const FriendCard = props => (
    <Container>
        <ProfilePhoto />
        <Weather />
        <News />
    </Container>
);
