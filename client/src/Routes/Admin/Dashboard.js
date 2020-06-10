import React, { Component, useState, useEffect } from 'react';
import axios from 'axios';
import { Button, Modal, Container, Table, Form, Col } from 'react-bootstrap';
import Navbar from '../../components/utilities/Navbar/Navbar';
import CKEditor from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';


class Addpost extends Component {
    state = {
        show: false,
        title: '',
        subtitle: '',
        author: '',
        content: '',
        type: 'poem',
        image: null,
    }

    componentDidMount() {
        ClassicEditor
            .create(document.querySelector('#editor'))
            .catch(error => {
                console.error(error);
            });
    }

    handleSubmitEvent = () => {
        console.log(this.state);

        var myHeaders = new Headers();


        var formdata = new FormData();
        formdata.append("type", this.state.type);
        formdata.append("name", this.state.author);
        formdata.append("title", this.state.title);
        formdata.append("subtitle", this.state.subtitle);
        formdata.append("content", this.state.content);
        formdata.append("image", this.state.image, this.state.image.name);

        console.log(formdata);

        var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: formdata,
            redirect: 'follow'
        };

        fetch("/addBlog", requestOptions)
            .then(response => response.text())
            .then(result => {
                this.setState({
                    show: false,
                    title: '',
                    subtitle: '',
                    author: '',
                    content: '',
                    type: 'poem',
                    image: null
                })
                this.props.callback(true);
                console.log(result);
            })
            .catch(error => console.log('error', error));
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
            image: event.target.files[0]
        });
    }

    handleContentChange = (data) => {
        this.setState({
            content: data
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
                                        <option selected value='poem'>Poem</option>
                                        <option value='article'>Article</option>
                                        <option value='story'>Story</option>
                                    </Form.Control>
                                </Form.Group>

                                <Form.Group as={Col} controlId="formGridImage">
                                    <Form.File id="formcheck-api-regular">
                                        <Form.File.Label>Upload an image</Form.File.Label>
                                        <Form.File.Input required name="image" onChange={this.handleImageChange} accept="image/*" />
                                    </Form.File>
                                </Form.Group>
                            </Form.Row>
                            <label for="w3review">Content</label>
                            <CKEditor
                                editor={ClassicEditor}
                                data="<p>Copy paste it here</p>"
                                onInit={editor => {
                                    // You can store the "editor" and use when it is needed.
                                    console.log('Editor is ready to use!', editor);
                                }}
                                onChange={(event, editor) => {
                                    const data = editor.getData();
                                    this.handleContentChange(data);
                                }}
                                onBlur={(event, editor) => {
                                    console.log('Blur.', editor);
                                }}
                                onFocus={(event, editor) => {
                                    console.log('Focus.', editor);
                                }}
                            />
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

    render() {
        return (
            <tr>
                <td>{this.props.id}</td>
                <td>{this.props.title}</td>
                <td>{this.props.type}</td>
                <td>{this.props.author}</td>
                <td>{this.props.date}</td>
            </tr>
        )
    }

}


const Dashboard = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        axios.get('/blogs')
            .then(res => {
                setPosts(res.data);
            })
            .catch(err => {
                console.error(err);
            })
    }, []);

    const rerendercallback = (shouldupdate) => {
        if (shouldupdate) {
            setPosts([]);
            axios.get('/blogs')
                .then(res => {
                    setPosts(res.data);
                })
                .catch(err => {
                    console.error(err);
                })
        }
    }

    const rows = posts.map(post => {
        const date = new Date(post.date_uploaded).toDateString();
        return <TableRow id={post._id} title={post.title} type={post.type} author={post.author} date={date} />
    })

    return (
        <React.Fragment>
            <Navbar />
            <Container className="my-5">
                <Addpost callback={rerendercallback} />
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>Post ID</th>
                            <th>Title</th>
                            <th>Type</th>
                            <th>Author</th>
                            <th>Date</th>
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

export default Dashboard;