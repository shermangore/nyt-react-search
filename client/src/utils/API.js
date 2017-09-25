import axios from "axios";
import config from "../config/config.js";

export default {
  // Gets all articles
  searchArticles: function(keyWords, startDate, endDate) {
    console.log("Here: ", keyWords, startDate, endDate);
    if (startDate && endDate) {
      return axios.get(`https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=${config.authKey}&q=${keyWords}&begin_date=${startDate}&end_date=${endDate}`);
    } else if ((keyWords) && (!startDate || !endDate)) {
      return axios.get(`https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=${config.authKey}&q="${keyWords}"`);
    }
  },
  // Gets the article with the given id
  getArticles: function() {
    return axios.get("/api/articles/");
  },
  viewArticles: function() {
    return axios.get("/api/articles/");
  },
  // Gets the article with the given id
  getArticle: function(id) {
    return axios.get("/api/articles/" + id);
  },
  // Deletes the article with the given id
  deleteArticle: function(id) {
    return axios.delete("/api/articles/" + id);
  },
  // Saves a article to the database
  saveArticle: function(articleData) {
    return axios.post("/api/articles", articleData);
  }
};
