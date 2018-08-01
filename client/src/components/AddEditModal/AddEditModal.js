import React, { Component } from "react";
import API from "../../utils/API";
import { Col, Row, Container } from "../../components/Grid";
import { Input, FormBtn } from "../../components/Form";
import Jumbotron from "../../components/Jumbotron";
import API from "../../utils/API";

import "./AddEditModal.css";

class AddEditModal extends Component {
  state = {
    name: "",
    location: "",
    note: ""
  };

  componentDidMount() {
    
  }

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
          .then(res => this.componentDidMount()) // to be changed
          .catch(err => console.log(err));
    }
  };

  render() {
    return (
      <div className="modal" tabindex="-1" role="dialog">
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Add a Friend!</h5>
              <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <Container>
                <Jumbotron>
                  <h1>Please fill out info to add a friend</h1>
                </Jumbotron>
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
              </Container>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default AddEditModal;