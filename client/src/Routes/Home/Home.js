import React, { Component } from 'react';
import Navbar from '../../components/utilities/Navbar/Navbar';
import Slideshow from '../../components/Slideshow/Slideshow';
import Post from '../../components/Post/Post';
import { Link } from 'react-router-dom';
import { Container, Button } from 'react-bootstrap';
import Footer from '../../components/utilities/Footer/Footer';
import styles from './Home.module.css'

const axios = require('axios').default;
const Features = () => {
    return (
        <div style={{ width: '70%', margin: '0 auto' }}>
            <hr className="featurette-divider" />

            <div className="row featurette">
                <div className="col-md-7">
                    <h2 className="featurette-heading">First featurette heading. <span className="text-muted">It’ll blow your mind.</span></h2>
                    <p className="lead">Donec ullamcorper nulla non metus auctor fringilla. Vestibulum id ligula porta felis euismod semper. Praesent commodo cursus magna, vel scelerisque nisl consectetur. Fusce dapibus, tellus ac cursus commodo.</p>
                </div>
                <div className="col-md-5">
                    <svg className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" width="500" height="500" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false" role="img" aria-label="Placeholder: 500x500"><title>Placeholder</title><rect width="100%" height="100%" fill="#eee" /><text x="50%" y="50%" fill="#aaa" dy=".3em">500x500</text></svg>
                </div>
            </div>

            <hr className="featurette-divider" />

            <div className="row featurette">
                <div className="col-md-7 order-md-2">
                    <h2 className="featurette-heading">Oh yeah, it’s that good. <span className="text-muted">See for yourself.</span></h2>
                    <p className="lead">Donec ullamcorper nulla non metus auctor fringilla. Vestibulum id ligula porta felis euismod semper. Praesent commodo cursus magna, vel scelerisque nisl consectetur. Fusce dapibus, tellus ac cursus commodo.</p>
                </div>
                <div className="col-md-5 order-md-1">
                    <svg className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" width="500" height="500" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false" role="img" aria-label="Placeholder: 500x500"><title>Placeholder</title><rect width="100%" height="100%" fill="#eee" /><text x="50%" y="50%" fill="#aaa" dy=".3em">500x500</text></svg>
                </div>
            </div>

            <hr className="featurette-divider" />

            <div className="row featurette">
                <div className="col-md-7">
                    <h2 className="featurette-heading">And lastly, this one. <span className="text-muted">Checkmate.</span></h2>
                    <p className="lead">Donec ullamcorper nulla non metus auctor fringilla. Vestibulum id ligula porta felis euismod semper. Praesent commodo cursus magna, vel scelerisque nisl consectetur. Fusce dapibus, tellus ac cursus commodo.</p>
                </div>
                <div className="col-md-5">
                    <svg className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" width="500" height="500" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false" role="img" aria-label="Placeholder: 500x500"><title>Placeholder</title><rect width="100%" height="100%" fill="#eee" /><text x="50%" y="50%" fill="#aaa" dy=".3em">500x500</text></svg>
                </div>
            </div>

            <hr className="featurette-divider" />
        </div>
    )
}

class Home extends Component {
    state = {
        posts: []
    }

    componentDidMount() {
        axios.get('/topblogs')
            .then((response) => {
                this.setState({ posts: response.data });
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    render() {
        const posts = this.state.posts.map(post => {
            return <Post key={post._id} id={post._id} title={post.title} subtitle={post.subtitle} author={post.author} content={post.content} image={post.location} type={post.type} />;
        });
        return (
            <div style={{ backgroundColor: 'white' }}>
                <Navbar />
                <Slideshow />
                <Features />
                <div style={{ background: '#dddddd', }}>
                    <h1 className="py-5" style={{ textAlign: 'center' }}>Read our top posts</h1>
                    <div style={{ margin: '0 auto', width: '100%', padding: '0% 5% 5%', display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
                        {posts}
                    </div>
                    <div className="text-center py-3">
                        <Link to='/blog'>
                            <Button variant="success">Read All Posts</Button>
                        </Link>
                    </div>
                </div>
                <Footer />
            </div>
        );
    }
}

export default Home;