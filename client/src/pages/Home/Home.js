import React, { Component } from "react";
import API from "../../utils/API";
import { Col, Row, Container } from "../../components/Grid";
import { List, ListItem } from "../../components/List";
import FriendCard from "../../components/FriendCard/FriendCard";
import UserCard from "../../components/UserCard/UserCard";
import MapCard from "../../components/MapCard";

class Home extends Component {
  state = {
    user: "",
    friends: []
  };

    componentDidMount() {
      this.loadUser();
      this.loadFriends();
    }

    loadUser = () => {
      API.getUser()
        .then(res =>
          this.setState({
            user: res.data
          })
        )
        .catch(err => console.log(err));
    };

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
            {/* <UserCard
              name={this.state.user.name}
              profile_pic={this.state.user.profile_pic}
              location={this.state.user.location}
            /> */}
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
                      lat={friend.lat}
                      lng={friend.lng}
                      note={friend.note}
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
