import React, { Component } from "react";
import API from "../../utils/API";
import { Col, Row, Container } from "../../components/Grid";
import { List, ListItem } from "../../components/List";
import FriendCard from "../../components/FriendCard/FriendCard";
import MapCard from "../../components/MapCard";

class Home extends Component {
  state = {
    friends: []
  };

  componentDidMount() {
    this.loadFriends();
  }

  loadFriends = () => {
    API.getFriends()
      .then(res =>
        this.setState({
          friends: res.data
        })
      )
      .catch(err => console.log(err));
  };

  render() {
    return (
      <Container fluid>
        <Row>
          <Col size="md-12">
            <UserCard />
          </Col>
        </Row>
        <Row>
          <Col size="md-12">
            {this.state.friends.length ? (
              <List>
                {this.state.friends.map(friend => (
                  <ListItem key={friend._id}>
                    <FriendCard
                      name={friend.name}
                      profile_pic={friend.profile_pic}
                      location={friend.location}
                      reminder={friend.reminder}
                    />
                  </ListItem>
                ))}
              </List>
            ) : (
              <h2>No Friends to Display!</h2>
            )}
          </Col>
          <Col size="md-12">
            <MapCard />
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Home;
