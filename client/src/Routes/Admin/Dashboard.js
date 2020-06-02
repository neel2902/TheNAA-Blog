import React, { Component } from 'react';
import axios from 'axios';
import { Button, Modal, Container, Table, Form, Col } from 'react-bootstrap';
import Navbar from '../../components/utilities/Navbar/Navbar';



class Addpost extends Component {
    state = {
        show: false,
        title: '',
        subtitle: '',
        author: '',
        content: '',
        type: '',
        image: ''
    }

    handleSubmitEvent = () => {
        console.log(this.state);
        const postData = {
            title: this.state.title,
            subtitle: this.state.subtitle,
            author: this.state.author,
            content: this.state.content,
            type: this.state.type,
            image: this.state.image
        }
        axios.post('/addBlog', postData)
            .then(res => {
                console.log(res);
            })
            .catch(err => {
                console.error(err);
            })
    }



    handleTypeChange = (event) => {
        this.setState({
            type: event.target.value
        });
    }

    handleTitleChange = (event) => {
        this.setState({
            title: event.target.value
        });
    }

    handleAuthorChange = (event) => {
        this.setState({
            author: event.target.value
        });
    }

    handleSubtitleChange = (event) => {
        this.setState({
            subtitle: event.target.value
        });
    }

    handleImageChange = (event) => {
        this.setState({
            image: event.target.value
        });
    }

    handleContentChange = (event) => {
        this.setState({
            content: event.target.value
        });
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
                        <Form >
                            <Form.Row>
                                <Form.Group as={Col} controlId="formGridTitle">
                                    <Form.Label>Title</Form.Label>
                                    <Form.Control type="text" placeholder="Title" name="title" value={this.state.title} onChange={this.handleTitleChange} required />
                                </Form.Group>

                                <Form.Group as={Col} controlId="formGridAuthor">
                                    <Form.Label>Author</Form.Label>
                                    <Form.Control type="text" placeholder="Author" name="author" value={this.state.author} onChange={this.handleAuthorChange} required />
                                </Form.Group>
                            </Form.Row>
                            <Form.Row>
                                <Form.Group as={Col} controlId="formGridSubtitle">
                                    <Form.Label>Subtitle</Form.Label>
                                    <Form.Control type="text" placeholder="Subtitle" name="subtitle" value={this.state.subtitle} onChange={this.handleSubtitleChange} required />
                                </Form.Group>
                            </Form.Row>
                            <Form.Row>
                                <Form.Group as={Col} controlId="formGridCategory">
                                    <Form.Label>Category</Form.Label>
                                    <Form.Control as="select" onChange={this.handleTypeChange} value={this.state.type} custom>
                                        <option value='poem'>Poem</option>
                                        <option selected value='article'>Article</option>
                                        <option value='story'>Story</option>
                                    </Form.Control>
                                </Form.Group>

                                <Form.Group as={Col} controlId="formGridImage">
                                    <Form.File id="formcheck-api-regular">
                                        <Form.File.Label>Upload an image</Form.File.Label>
                                        <Form.File.Input required name="image" onChange={this.handleImageChange} value={this.state.image} accept="image/*" />
                                    </Form.File>
                                </Form.Group>
                            </Form.Row>
                            <label for="w3review">Content</label>
                            <textarea id="w3review" rows="4" cols="100" name="content" onChange={this.handleContentChange} value={this.state.content}>
                            </textarea>
                            <br />
                            <Button variant="success" style={{ margin: '2em auto', width: '30%' }} onClick={this.handleSubmitEvent}>
                                Submit
                            </Button>
                        </Form>
                    </Modal.Body>
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
                <td onClick={this.deleteEventHandler}><span role="img" aria-label="string">❌</span></td>
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