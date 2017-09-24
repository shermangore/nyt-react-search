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
  // Gets the book with the given id
  getSavedArticles: function() {
    return axios.get("/api/saved/");
  },
  // Deletes the book with the given id
  deleteArticle: function(id) {
    return axios.delete("/api/saved/" + id);
  },
  // Saves a book to the database
  saveArticle: function(articleData) {
    return axios.post("/api/saved/", articleData);
  }
};