import React, { Component } from 'react';
import axios from 'axios';
import MovieBox from './moviebox'




class App extends Component {
  constructor(props) {
    super(props);
    this.state = {data: [],
                  inputValue: ''};


    this.handleChange = this.handleChange.bind(this);
    this.movieSearch = this.movieSearch.bind(this);


  }

  handleChange(event) {
    this.setState({inputValue: event.target.value});

  }

  movieSearch(){

      axios.get('http://www.omdbapi.com/?s=' + encodeURI(this.state.inputValue) + '&apikey=5442160c')
      .then((res) => {

        let omdb = res.data.Search;
        //   for(var i = 0; i < omdb.length; i++) {
        //     var result = omdb[i];
        //
        // }
        this.setState({
          data: omdb
        });
    });
    }


  render() {
    const movies = this.state.data.map((movie) => {
			return <MovieBox  title={movie.Title}
                 img={movie.Poster}
                year={movie.Year} />
		});
    return (
      <div>
        <button onClick={this.movieSearch}>Search</button>
            <input type="text" value={this.state.value} onChange={this.handleChange} />
            <ul>
							{movies}
						</ul>
      </div>
    );
  }
}

export default App
