import React, { Component } from "react";
import API from "../../utils/API";
import { Col, Row, Container } from "../../components/Grid";
import { List, ListItem } from "../../components/List";
import { Input, FormBtn } from "../../components/Form";
import FriendCard from "../../components/FriendCard/FriendCard";
import MapCard from "../../components/MapCard";

class Home extends Component {
  state = {
    friends: [],
    // add friend properties
    name: "",
    location: "",
    note: ""
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
    <MapCard friends={this.state.friends} />;
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    if (this.state.name && this.state.location 
      && this.state.note) {
        API.saveFriend({
          name: this.state.name,
          location: this.state.location,
          note: this.state.note
        })
          .then(res => this.loadFriends()) 
          .catch(err => console.log(err));
    }
  };

  render() {
    return (
      <Container fluid>
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
            <MapCard friends={this.state.friends} />
          </Col>
          <Col size="md-12">
            <Card>
              <h1>Please fill out info to add a friend</h1>
              <form>
                <Input
                  value={this.state.name}
                  onChange={this.handleInputChange}
                  name="name"
                  placeholder="name"
                />
                <Input
                  value={this.state.location}
                  onChange={this.handleInputChange}
                  name="location"
                  placeholder="location (ex: Washington, DC)"
                />
                <Input
                  value={this.state.note}
                  onChange={this.handleInputChange}
                  name="note"
                  placeholder="note/reminder"
                />
                <FormBtn
                  disabled={!(this.state.name && this.state.location && this.state.note)}
                  onClick={this.handleFormSubmit}
                >
                  Add Friend
                </FormBtn>
              </form>
            </Card>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Home;
