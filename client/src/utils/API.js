import axios from "axios";

export default {
  // Gets all movies
  getMovies: function () {
    return axios.get("/api/Movies");
  },
  // Deletes the movie with the given id
  deleteMovie: function (id) {
    return axios.delete("/api/Movies/" + id);
  },
  // Saves a movie to the database
  saveMovie: function (movieData) {
    return axios.post("/api/Movies", movieData);
  },
  updateMovie: function (movieData) {
    return axios.put(`/api/Movies/${movieData._id}}`, movieData);
  }
};

