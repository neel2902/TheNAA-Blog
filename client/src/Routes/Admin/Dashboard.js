import React, { Component } from 'react';
import axios from 'axios';
import { Button, Modal, Container, Table, Form, Col } from 'react-bootstrap';
import Navbar from '../../components/utilities/Navbar/Navbar';
import CKEditor from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import Cookies from 'js-cookie';


class Addpost extends Component {
    state = {
        show: false,
        title: '',
        subtitle: '',
        author: '',
        content: '',
        type: '',
        image: null,
        cookieId: Cookies.get('username')
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
        // myHeaders.append("Authorization", "Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhZG1pbkBnbWFpbC5jb20iLCJleHAiOjE1OTAwOTkxNDAsImlhdCI6MTU5MDA4MTE0MH0.BMM_c1LaTwQNsQ3Usg84-OrGQokP2Zm5cCiplBXRroaKqWGWQcfAHhoSC67nBee7yquTDOIuONm1m7McFYcQRg");
        // myHeaders.append("Cookie", "connect.sid=s%3ACdRTVkX_8YCQfX7e_QBhrGFga9qFWvoV.m%2BPs8Q2hsr4StmX0wnf7HsmP8DHHjwXU2VByozznvko");

        var formdata = new FormData();
        formdata.append("type", this.state.type);
        formdata.append("title", this.state.title);
        formdata.append("subtitle", this.state.subtitle);
        formdata.append("content", this.state.content);
        formdata.append("image", this.state.image, this.state.image.name);

        var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: formdata,
            redirect: 'follow'
        };

        fetch("http://localhost:5000/addBlog", requestOptions)
            .then(response => response.text())
            .then(result => {
                if (result == 'blog added successfully') {
                    window.location.reload();
                }
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
                                        <option value='poem'>Poem</option>
                                        <option selected value='article'>Article</option>
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

    deleteEventHandler = () => {
        alert("Delete post feature is currently in the making");
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