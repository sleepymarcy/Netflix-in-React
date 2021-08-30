import React from "react";
// import { Col,Card,Button } from "react-bootstrap";
class MovieCard extends React.Component {
  render() {
      console.log(this.props.movie)
    return (
      <a className="col-2 my-3" key={this.props.movieId}>
          <div className='movieCard h-100'>
              <img className='w-100' src={this.props.img}/>
            </div>
      </a>
    );
  }
}

export default MovieCard;