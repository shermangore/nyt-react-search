import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../../components/Grid";
import Jumbotron from "../../components/Jumbotron";
import API from "../../utils/API";
import { List, ListItem } from "../../components/List";
import DeleteBtn from "../../components/DeleteBtn";

class Detail extends Component {
  state = {
    articles: []
  };
  // When this component mounts, grab the article with the _id of this.props.match.params.id
  // e.g. localhost:3000/article/599dcb67f0f16317844583fc
  componentWillMount() {
    this.loadArticles();
  }

  loadArticles = () => {
    API.viewArticles()
      .then(res =>
        this.setState({ articles: res.data, topic: "", author: "", url: "" })
      )
      .catch(err => console.log(err));
  };

  deleteArticle = id => {
    API.deleteArticle(id)
      .then(res => this.loadArticles())
      .catch(err => console.log(err));
  };

  viewArticles = () => {
    API.viewArticles()
      .catch(err => console.log(err));
  };

  render() {
    return (
      <Container fluid>
        <Row>
          <Col size="md-12">
          <Jumbotron>
            <h1>Articles On My List</h1>
          </Jumbotron>
          {this.state.articles.length ? (
            <List>
              {this.state.articles.map(article => (
                <ListItem key={article._id}>
                  <Link to={article.url}>
                    <strong>
                      {article.topic} by {article.author}
                    </strong>
                  </Link>
                  <DeleteBtn onClick={() => this.deleteArticle(article._id)} />
                </ListItem>
              ))}
            </List>
          ) : (
              <h3>No Results to Display</h3>
            )}
        </Col>
      </Row>
      </Container>
    );
  }
}

export default Detail;
