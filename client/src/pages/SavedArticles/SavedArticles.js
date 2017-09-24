import React, { Component } from "react";
import DeleteBtn from "../../components/DeleteBtn";
import Jumbotron from "../../components/Jumbotron";
import API from "../../utils/API";
import { Link } from "react-router-dom";
import { Col, Container } from "../../components/Grid";
import { List, ListItem } from "../../components/List";

class SavedArticles extends Component {
  state = {
    articles: [],
    topic: "",
    author: "",
    startYear: "",
    endYear: ""
  };

  componentDidMount() {
    this.loadSavedArticles();
  }

  loadSavedArticles = () => {
    API.getSavedArticles()
      .then(res =>
        this.setState({ articles: res.data, topic: "", author: "", startYear: "", endYear: "" })
      )
      .catch(err => console.log(err));
  };

  deleteArticle = id => {
    API.deleteArticle(id)
      .then(res => this.loadSavedArticles())
      .catch(err => console.log(err));
  };

  render() {
    return (
      <Container fluid>
          <Col size="md-6">
<Jumbotron>
  <h1>Saved Articles</h1>
</Jumbotron>
{this.state.articles.length ? (
  <List>
    {this.state.articles.map(article => (
      <ListItem key={article._id}>
        <Link to={"/articles/" + article._id}>
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
</Container>
    );
  }
}

export default SavedArticles;