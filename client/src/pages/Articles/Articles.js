import React, { Component } from "react";
import SaveBtn from "../../components/SaveBtn";
import Jumbotron from "../../components/Jumbotron";
import API from "../../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../../components/Grid";
import { List, ListItem } from "../../components/List";
import { Input, FormBtn } from "../../components/Form";
import ShowSavedBtn from "../../components/ShowSavedBtn";

class Articles extends Component {
  state = {
    articles: [],
    savedArticles: [],
    topic: "",
    author: "",
    startYear: "",
    endYear: "",
    url: ""
  };

  componentWillMount() {
    this.loadArticles();
  }

  loadArticles = () => {
    API.getArticles()
      .then(res =>
        this.setState({ articles: res.data, topic: "", author: "", url: "" })
      )
      .catch(err => console.log(err));
  };

  viewArticles = () => {
    API.viewArticles()
      .catch(err => console.log(err));
  };

  saveArticle = (topic, author, web_url) => {
    API.saveArticle({ topic: topic, author: author, url: web_url })
      .then(res => this.loadArticles())
      .catch(err => console.log(err));
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
          .then(res => this.setState({ savedArticles: res.data.response.docs }))
          .catch(err => console.log(err));
      } else if (!this.state.startYear || !this.state.endYear) {
        API.searchArticles(this.state.topic)
          .then(res => this.setState({ savedArticles: res.data.response.docs }))
          .catch(err => console.log(err));
      }
    }
  };

  render() {
    return (
      <Container fluid>
        <Row>
          <Col size="md-6">
            <Jumbotron>
              <h1>What's New in the NY Times?</h1>
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
                placeholder="Start Date (YYYYMMDD)"
              />
              <Input
                value={this.state.endYear}
                onChange={this.handleInputChange}
                name="endYear"
                placeholder="End Date (YYYYMMDD)"
              />
              <FormBtn
                disabled={!(this.state.topic)}
                onClick={this.handleFormSubmit}
              >
                Get Articles
              </FormBtn>
            </form>
          </Col>
          <Col size="md-6">
            <Jumbotron>
              <h1 className="text-center">Articles</h1>
            </Jumbotron>
            {this.state.savedArticles.length ? (
              <List>
                {this.state.savedArticles.map(savedArticle => (
                  <ListItem key={savedArticle._id}>
                    <Link to={savedArticle.web_url}>
                      <strong>
                        {savedArticle.headline.main} by {savedArticle.byline.original}
                      </strong>
                    </Link>
                    <SaveBtn onClick={() => this.saveArticle(savedArticle.headline.main, savedArticle.byline.original, savedArticle.web_url)} />
                  </ListItem>
                ))}
              </List>
            ) : (
                <h3>No Results to Display</h3>
              )}
            <ShowSavedBtn />
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Articles;
