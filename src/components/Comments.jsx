import React from "react";
import {
    Modal,
    Button,
    Spinner,
    Form,
    FormControl,
    Alert,
} from "react-bootstrap";

class Comments extends React.Component {
    state = {
        asin: this.props.movId,
        loading: false,
        comments: [],
        movie: [],
        success: false,
        newCom: {
            author: "",
            comment: "",
            rate: 1,
            elementId: this.props.movId,
        },
    };
    hideCom = (event) => {
        this.props.parentCallback(false);
        event.preventDefault();
    };
    // Loading info
    async componentDidMount() {
        this.setState({ loading: true });
        // Loading movie info
        try {
            const response = await fetch(
                "https://www.omdbapi.com/?apikey=23ae3a68&i=" + this.state.asin
            );
            const mov = await response.json();
            this.setState({ movie: mov });
        } catch (e) {
            console.log(e);
        }
        // Comments
        try {
            const response = await fetch(
                "https://striveschool-api.herokuapp.com/api/comments/" +
                this.state.asin,
                {
                    method: "GET",
                    headers: {
                        Authorization:
                            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MTFkMTIyMDJkNTI2MjAwMTViNmRkN2EiLCJpYXQiOjE2MzA1MDkxNzQsImV4cCI6MTYzMTcxODc3NH0.WKfbnROmOoWGBPzQJjq4krYwizYV2jm-ci6gY5uHRt4",
                    },
                }
            );
            const data = await response.json();
            this.setState({ comments: data, loading: false });
            console.log(this.state.comments);
        } catch (e) {
            console.log(e);
        }
    }
    loadIt = async () => { };
    // Setting up value
    setUp(e, name) {
        this.setState({
            newCom: {
                ...this.state.newCom,
                [name]: e.target.value,
            },
        });
    }
    //   Sending Coments
    sendComment = async (e) => {
        e.preventDefault();
        console.log(this.state.newCom);

        const response = await fetch(
            "https://striveschool-api.herokuapp.com/api/comments/",
            {
                method: "POST",
                body: JSON.stringify(this.state.newCom),
                headers: {
                    "Content-type": "application/json",
                    Authorization:
                        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MTFkMTIyMDJkNTI2MjAwMTViNmRkN2EiLCJpYXQiOjE2MzA1MDkxNzQsImV4cCI6MTYzMTcxODc3NH0.WKfbnROmOoWGBPzQJjq4krYwizYV2jm-ci6gY5uHRt4",
                },
            }
        );

        if (response.ok) {
            this.setState({ success: true });
            setTimeout(this.alert, 2000);
            setTimeout(this.reload, 3000);
        }
    };
    //   alert
    alert = () => {
        this.setState({ success: false });
    };
    //   reload
    reload = async () => {
        try {
            const response = await fetch(
                "https://striveschool-api.herokuapp.com/api/comments/" +
                this.state.asin,
                {
                    method: "GET",
                    headers: {
                        Authorization:
                            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MTFkMTIyMDJkNTI2MjAwMTViNmRkN2EiLCJpYXQiOjE2MzA1MDkxNzQsImV4cCI6MTYzMTcxODc3NH0.WKfbnROmOoWGBPzQJjq4krYwizYV2jm-ci6gY5uHRt4",
                    },
                }
            );
            const data = await response.json();
            this.setState({ comments: data, loading: false });
            console.log(this.state.comments);
        } catch (e) {
            console.log(e);
        }
    };

    render() {
        return (
            <Modal show={this.props.showit}>
                <Modal.Header>
                    <Modal.Title>About the movie</Modal.Title>
                </Modal.Header>
                <>
                    {!this.state.loading ? (
                        <Modal.Body>
                            {/* MOVIE INFO */}
                            <div className="row">
                                <div className="col-6">
                                    <img className="w-100" src={this.state.movie.Poster} alt="" />
                                </div>
                                <div className="col-6 d-flex flex-column">
                                    <h4 className="font-weight-light">
                                        {this.state.movie.Title}
                                    </h4>
                                    <p>{this.state.movie.Plot}</p>
                                    <small className="font-weight-bold">
                                        {this.state.movie.Actors}
                                    </small>
                                    <br />
                                    <small className="font-weight-bold">
                                        {this.state.movie.Awards}
                                    </small>
                                </div>
                            </div>
                            <hr />
                            <ul>
                                {Object.values(this.state.comments).map((com) => (
                                    <li key={com._id}>
                                        <small className="font-weight-bold">{com.author}</small>{" "}
                                        {com.comment}
                                    </li>
                                ))}
                            </ul>
                            <hr />
                            <Form onSubmit={this.sendComment}>
                                <FormControl
                                    type="text"
                                    placeholder="author"
                                    className="dropdownMenu mb-1"
                                    aria-label="Search"
                                    onKeyUp={(e) => this.setUp(e, "author")}
                                    required
                                />
                                <FormControl
                                    type="text"
                                    placeholder="comment"
                                    className="dropdownMenu mb-1"
                                    aria-label="Search"
                                    onKeyUp={(e) => this.setUp(e, "comment")}
                                    required
                                />
                                <FormControl
                                    type="number"
                                    placeholder="rate"
                                    className="dropdownMenu mb-1"
                                    aria-label="Search"
                                    onKeyUp={(e) => this.setUp(e, "rate")}
                                    required
                                />
                                <Button type="submit" variant="info">
                                    Send
                                </Button>
                            </Form>
                        </Modal.Body>
                    ) : (
                        <Spinner
                            animation="grow"
                            variant="warning"
                            className="mx-auto my-5"
                        />
                    )}
                    {this.state.success ? (
                        <Alert variant="success">Uploaded!</Alert>
                    ) : (
                        <></>
                    )}
                </>
                <Modal.Footer>
                    <Button variant="secondary" onClick={this.hideCom}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        )
    }
}

export default Comments