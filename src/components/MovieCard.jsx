import React from "react"
import Comments from "./Comments"
// import { Col,Card,Button } from "react-bootstrap";
class MovieCard extends React.Component {
  state = {
    showCom: false,
  };
  // set to show
  setShow() {
    this.setState({ showCom: true })
  }

  handleCallback = (childData) => {
    this.setState({ showCom: childData })
  };

  render() {
    return (
      <>
        <a
          className="col-2 my-3"
          key={this.props.movieId}
          value={this.props.movieId}
          onClick={() => {
            this.setState({ showCom: true })
          }}
        >
          <div className="movieCard h-100">
            <img className="w-100" src={this.props.img} />
          </div>
        </a>
        {this.state.showCom ? (
          <Comments
            parentCallback={this.handleCallback}
            showit={this.state.showCom}
            movId={this.props.movieId}
          />
        ) : (
          <></>
        )}
      </>
    )
  }
}

export default MovieCard