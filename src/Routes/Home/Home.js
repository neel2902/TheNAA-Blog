import React, { Component } from 'react'

import Navbar from '../../components/utilities/Navbar/Navbar';
import Slideshow from '../../components/Slideshow/Slideshow';
import Post from '../../components/Post/Post';
import { Container, Button } from 'react-bootstrap';
import Footer from '../../components/utilities/Footer/Footer';
import styles from './Home.module.css'


class Home extends Component {
    render() {
        const posts = [];
        const PostGenerator = () => {
            for (var i = 0; i < 5; i++) {
                i % 2 === 0 ? posts.push(<Post alt='' />) : posts.push(<Post alt='alt' />);
            }
            return posts;
        }
        return (
            <div style={{ backgroundColor: 'white' }}>
                <Navbar />
                <Slideshow />
                <Container className={styles.homeposts} >
                    <PostGenerator className={styles.postGen} />
                </Container>
                <Container className="text-center my-5">
                    <Button>Read All Posts</Button>
                </Container>
                <Footer />
            </div>
        );
    }
}

export default Home;