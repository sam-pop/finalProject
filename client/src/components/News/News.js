import React, { Component } from "react";
import API from "../../utils/API";
import { Col, Row, Container } from "../../components/Grid";
import { List, ListItem } from "../../components/List";

class News extends Component {
    state = {
        newsStories: []
    };

    componentDidMount() {
        this.loadNews();
    }

    loadNews = () => {
        API.getNews(this.props.location) 
            .then(res => 
                this.setState({
                    newsStories: res.data.articles
                })
            )
            .catch(err => console.log(err));
    };

    render() {
        return (
            <Container>
                <Row>
                    <Col size="md=12">
                    {this.state.newsStories.length ? (
                        <List>
                            {this.state.newsStories.map(story => (
                                <ListItem key={story.title}>
                                    <strong>
                                        title: {story.title}
                                    </strong>
                                    date: {story.publishedAt}
                                </ListItem>
                            ))}
                        </List>
                    ) : (
                        <h3>No News to Display</h3>
                    )}
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default News;