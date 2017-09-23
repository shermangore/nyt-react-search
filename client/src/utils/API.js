import axios from "axios";
import config from "../config/config.js";

export default {
  // Gets all books
  getArticles: function() {
    return axios.get("/api/articles");
  },
  // Gets all books
  searchArticles: function(keyWords) {
    return axios.get(`https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=${config.authKey}&q="${keyWords}"`);
  },
  // Gets the book with the given id
  getArticle: function(id) {
    return axios.get("/api/articles/" + id);
  },
  // Deletes the book with the given id
  deleteArticle: function(id) {
    return axios.delete("/api/articles/" + id);
  },
  // Saves a book to the database
  saveArticle: function(articleData) {
    return axios.post("/api/articles", articleData);
  }
};
