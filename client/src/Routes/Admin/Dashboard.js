import React, { Component, useState } from 'react';
import axios from 'axios';
import { Button, Modal, Container, Table, Form, Col } from 'react-bootstrap';
import Navbar from '../../components/utilities/Navbar/Navbar';



class Addpost extends Component {
    state = {
        show: false
    }

    handleClose = () => {
        this.setState({ show: false });
    };

    handleShow = () => {
        this.setState({ show: true });
    }
    render() {
        return (
            <>
                <Button className="my-3" variant="success" onClick={this.handleShow} scrollable>
                    Add a post
                </Button>

                <Modal show={this.state.show} onHide={this.handleClose} size='lg'>
                    <Modal.Header closeButton>
                        <Modal.Title>Add a post</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Form>
                            <Form.Row>
                                <Form.Group as={Col} controlId="formGridTitle">
                                    <Form.Label>Title</Form.Label>
                                    <Form.Control type="text" placeholder="Title" required />
                                </Form.Group>

                                <Form.Group as={Col} controlId="formGridAuthor">
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control type="text" placeholder="Author" required />
                                </Form.Group>
                            </Form.Row>
                            <Form.Row>
                                <Form.Group as={Col} controlId="formGridSubtitle">
                                    <Form.Label>Subtitle</Form.Label>
                                    <Form.Control type="text" placeholder="Subtitle" required />
                                </Form.Group>
                            </Form.Row>
                            <Form.Row>
                                <Form.Group as={Col} controlId="formGridTitle">
                                    <Form.Label>Category</Form.Label>
                                    <Form.Control as="select" custom>
                                        <option value='poem'>Poem</option>
                                        <option selected value='article'>Article</option>
                                        <option value='story'>Story</option>
                                    </Form.Control>
                                </Form.Group>

                                <Form.Group as={Col} controlId="formGridAuthor">
                                    <Form.File id="formcheck-api-regular">
                                        <Form.File.Label required>Upload an image</Form.File.Label>
                                        <Form.File.Input />
                                    </Form.File>
                                </Form.Group>
                            </Form.Row>
                            <textarea id="w3review" name="w3review" rows="4" cols="100">
                            </textarea>
                        </Form>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={this.handleClose}>
                            Close
                    </Button>
                        <Button variant="primary" onClick={this.handleClose}>
                            Submit
                    </Button>
                    </Modal.Footer>
                </Modal>
            </>
        );
    }
}
class TableRow extends Component {

    deleteEventHandler = () => {
        alert("Hey whazzap");
    }

    render() {
        return (
            <tr>
                <td>{this.props.id}</td>
                <td>{this.props.title}</td>
                <td>{this.props.type}</td>
                <td>{this.props.author}</td>
                <td>{this.props.date}</td>
                <td onClick={this.deleteEventHandler}>❌</td>
            </tr>
        )
    }

}


class Dashboard extends Component {
    state = {
        posts: []
    }

    componentDidMount() {
        axios.get('/blogs')
            .then(res => {
                this.setState({
                    posts: res.data
                })
            })
            .catch(err => {
                console.error(err);
            })
    }

    render() {
        const rows = this.state.posts.map(post => {
            const date = new Date(post.date_uploaded * 1000).toDateString();
            return <TableRow id={post._id} title={post.title} type={post.type} author={post.author} date={date} />
        })

        return (
            <React.Fragment>
                <Navbar />
                <Container className="my-5">
                    <Addpost />
                    <Table striped bordered hover>
                        <thead>
                            <tr>
                                <th>Post ID</th>
                                <th>Title</th>
                                <th>Type</th>
                                <th>Author</th>
                                <th>Date</th>
                                <th>Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            {rows}
                        </tbody>
                    </Table>
                </Container>
            </React.Fragment>
        )
    }


}

export default Dashboard;