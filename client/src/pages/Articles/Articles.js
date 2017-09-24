import React, { Component } from "react";
import DeleteBtn from "../../components/DeleteBtn";
import Jumbotron from "../../components/Jumbotron";
import API from "../../utils/API";
import { Link } from "react-router-dom";
import { Row, Container } from "../../components/Grid";
import { List, ListItem } from "../../components/List";
import { Input, FormBtn } from "../../components/Form";

class Articles extends Component {
  state = {
    articles: [],
    topic: "",
    author: "",
    startYear: "",
    endYear: ""
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();

    if (this.state.topic) {
      if (this.state.startYear && this.state.endYear) {
        API.searchArticles(this.state.topic, this.state.startYear, this.state.endYear)
        .then(res => this.setState({ articles: res.data.response.docs}))
        .catch(err => console.log(err));
      } else if (!this.state.startYear || !this.state.endYear) {
        API.searchArticles(this.state.topic)
        .then(res => this.setState({ articles: res.data.response.docs}))
        .catch(err => console.log(err));
      }
    }
  };

  render() {
    return (
      <Container fluid>
        <Row>
            <Jumbotron>
              <h1>Search</h1>
            </Jumbotron>
            <form>
              <Input
                value={this.state.topic}
                onChange={this.handleInputChange}
                name="topic"
                placeholder="Topic (required)"
              />
              <Input
                value={this.state.startYear}
                onChange={this.handleInputChange}
                name="startYear"
                placeholder="Start Year (Optional)"
              />
              <Input
                value={this.state.endYear}
                onChange={this.handleInputChange}
                name="endYear"
                placeholder="End Year (Optional)"
              />
              <FormBtn
                disabled={!(this.state.topic)}
                onClick={this.handleFormSubmit}
              >
                Submit Search
              </FormBtn>
            </form>
            <Jumbotron>
              <h1>Top Articles</h1>
            </Jumbotron>
            {this.state.articles.length ? (
              <List>
                {this.state.articles.map(article => (
                  <ListItem key={article._id}>
                    <Link to={article.web_url}>
                      <strong>
                        {article.headline.main} by {article.byline.original}
                      </strong>
                    </Link>
                    <DeleteBtn onClick={() => this.deleteArticle(article._id)} />
                  </ListItem>
                ))}
              </List>
            ) : (
                <h3>No Results to Display</h3>
              )}
        </Row>
      </Container>
    );
  }
}

export default Articles;