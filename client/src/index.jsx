import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
// import AnyComponent from './components/filename.jsx'
import Search from './components/Search.jsx'
import Movies from './components/Movies.jsx'
import movieData from './components/movieData.js' // testiing getting data manually

class App extends React.Component {
  constructor(props) {
  	super(props)
  	this.state = {
      movies: [{deway: "movies"}],
      favorites: [{deway: "favorites"}],
      showFaves: false,
    };

    // // binding methods to the App class
    this.getMovies = this.getMovies.bind(this);
    // this.saveMovies = this.saveMovies.bind(this);
    // this.deleteMovie = this.deleteMovie.bind(this);
    // this.swapFavorites = this.swapFavorites.bind(this);
  }

  componentDidMount() {
    this.getMovies();
  }

  getMovies() {
    // make an axios request to your server on the GET SEARCH endpoint
    // fetch('http://localhost:3000/search')
    $.get('http://localhost:3000/search', function (data){
      console.log('GET REQUEST');
      this.setState({ movies: data });
    })

  }

  saveMovie() {
    // same as above but do something diff
  }

  deleteMovie() {
    // same as above but do something diff
  }

  swapFavorites() {
  //dont touch
    this.setState({
      showFaves: !this.state.showFaves
    });
  }


  render () {
  	return (
      <div className="app">
        <header className="navbar"><h1>Bad Movies</h1></header>
        <div className="main">
          <Search swapFavorites={this.swapFavorites} showFaves={this.state.showFaves}/>
          <Movies movies={this.state.showFaves ? this.state.favorites : this.state.movies} showFaves={this.state.showFaves}/>
        </div>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));