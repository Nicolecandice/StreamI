import React from "react";
import Jumbotron from "../../components/Jumbotron";
import API from "../../utils/API";
import DeleteBtn from "../../components/DeleteBtn";
import { Col, Row, Container } from "../../components/Grid";
import { List, ListItem } from "../../components/List";
import { Input, TextArea, FormBtn } from "../../components/Form";
/* global $ */
// this catches the jquery

class Movies extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        movies: [],
        title: "",
        director: "",
        synopsis: ""
      };
    }
  
    // When the component mounts, load all books and save them to this.state.books
    componentDidMount() {
      this.loadMovies();
    }
  
    // Loads all books  and sets them to this.state.books
    loadMovies = () => {
       API.getMovies()
      //   .then(res => this.setState({ movies: res.data, title: "", director: "", synopsis: "" }))
        .then(res => this.setState({ movies: res.data}))
        .catch(err => console.log(err));
    };
  
    // Deletes a book from the database with a given id, then reloads books from the db
    deleteMovie = id => {
      API.deleteMovie(id)
        .then(res => this.loadMovies())
        .catch(err => console.log(err));
    };
    editMovie = event => {
      console.log(event)
      $("#movieModal").modal("show");
    };
    updateMovie = id => {
      API.updateMovie(id)
        .then(res => this.loadMovies())
        .catch(err => console.log(err));
    };
  
  
    // Handles updating component state when the user types into the input field
    handleInputChange = event => {
      const { name, value } = event.target;
      this.setState({
        [name]: value
      });
    };
  
    // When the form is submitted, use the API.saveBook method to save the book data
    // Then reload books from the database
    handleFormSubmit = event => {
      event.preventDefault();
      if (this.state.title && this.state.director) {
        API.saveMovie({
          title: this.state.title,
          director: this.state.director,
          synopsis: this.state.synopsis
        })
          .then(res => this.loadMovies())
          .catch(err => console.log(err));
      }
    };
  
  

  // Add state to your component(example:10. Book.js)
  // Add the handleInputChange function
  // Have your handleFormSubmit call the API file for your createMovie function
  // Add the properties value and onChange to your Inputs and TextArea JSX
  // 1st Input value should be this.state.title
  // 2nd Input value should be this.state.author
  // TextArea value should be this.state.synopsis
  // All onChange values should be this.handleInputChange
  render() {
    return (
      <Container fluid>
      <MovieModal/>
        <Row>
          <Col size="md-12">
            <Jumbotron>
              <h1>STREAMi</h1>
            </Jumbotron>
            </Col>
            <Col size="md-6 sm-12">
            <header>
            <h1>What Movies Should I Watch?</h1>
          </header>
            <form>
              <Input
                value={this.state.title}
                onChange={this.handleInputChange}
                name="title"
                placeholder="Title (required)"
              />
              <Input
                value={this.state.director}
                onChange={this.handleInputChange}
                name="director"
                placeholder="Director (required)"
              />
              <TextArea
                value={this.state.synopsis}
                onChange={this.handleInputChange}
                name="synopsis"
                placeholder="Synopsis (Optional)"
              />
              <FormBtn
              disabled={!(this.state.director && this.state.title)}
                onClick={this.handleFormSubmit}
              >
                Submit Movie
              </FormBtn>
            </form>
          </Col>
          <Col size="md-6 sm-12">
            <header>
              <h1>Movies On My List</h1>
            </header>
            {this.state.movies.length ? (
              <List>
                {this.state.movies.map(movie => {
                  return (
                    <ListItem key={movie._id}>
                      <a href={"/movies/" + movie._id}>
                        <strong>
                          {movie.title} by {movie.director}
                        </strong>
                      </a>
                      <i className="glyphicon glyphicon-pencil" onClick={this.editMovie} data-title={movie.title}
                      data-director={movie.director}
                      data-synopsis={movie.synopsis}
                      data-id={movie._id}
                      data-toggle="modal"
                      data-target="#movieModal">
                    
                    </i>
                      
                      <DeleteBtn onClick={() => this.deleteMovie(movie._id)} />
                    </ListItem>
                  );
                })}
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
 class MovieModal extends React.Component {
  saveChanges=() => {
const {Director,Synopsis, _id } = Movies;
  }

    // build an object of the modal: title, director , Synopsis
//make sure to get the id of the movie target.
  
  render(){
    return(
<div className="modal" tabIndex="-1"id="movieModal" role="dialog">
  <div className="modal-dialog" role="document">
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title">Movie</h5>
        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div className="modal-body">
        <input>
         </input>
         <input>
         </input>
      </div>
      <div className="modal-footer">
        <button type="button"onClick={this.saveChanges} className="btn btn-primary">Save changes</button>
        <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
      </div>
    </div>
  </div>
</div>
    )
}
}



export default Movies;
 