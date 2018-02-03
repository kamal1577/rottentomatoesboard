import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import Comments from './comments'



class MovieBox extends Component {
  constructor(props) {
    super(props);
    this.state = {data: {},
                  inputValue: ''};
}

render(){
  return(
    <div className='moviepost'>
      <h2> Movie name: {this.props.title}</h2>
      <h2>Release date:{this.props.year}</h2>
      <img src={this.props.img} alt='Movie'></img>
      <Link to="/movie/" title={this.props.title}>See Details</Link>
      <Comments key={this.state}/>
    </div>
  )
}


}

export default MovieBox
