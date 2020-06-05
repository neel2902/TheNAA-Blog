import React, { Component } from 'react';
import axios from 'axios';
import { Image, Container } from 'react-bootstrap';
import Navbar from '../../components/utilities/Navbar/Navbar';
import styles from './Fullpost.module.css';
import Footer from '../../components/utilities/Footer/Footer';
import Post from '../../components/Post/Post';
import { Autoplay } from 'swiper/js/swiper.esm';

class Fullpost extends Component {
    state = {
        postId: '',
        title: '',
        type: '',
        subtitle: '',
        author: '',
        views: 0,
        content: '',
        date: '',
        otherposts: []
    }

    componentDidMount() {
        const url = window.location.href;
        const postUrl = url.split('/').slice(3).join('/');
        console.log(postUrl);

        axios.get('/blog/' + postUrl)
            .then(res => {
                const unixTimeStamp = new Date(res.data.date_uploaded);
                const date = unixTimeStamp.toDateString();

                this.setState({
                    postId: res.data._id,
                    title: res.data.title,
                    type: res.data.type,
                    subtitle: res.data.subtitle,
                    image: res.data.location,
                    author: res.data.author,
                    views: res.data.views,
                    content: res.data.content,
                    date: date
                });

                document.getElementById('content').innerHTML = this.state.content;
            })
            .catch(err => {
                console.error(err);
            }
            );

        axios.get('/topblogs')
            .then((response) => {
                this.setState({ otherposts: response.data });
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    render() {
        const posts = this.state.otherposts.map(post => {
            const date = new Date(post.date_uploaded).toDateString();
            return <Post key={post._id} id={post._id} title={post.title} author={post.author} subtitle={post.subtitle} content={post.content} image={post.location} date={date} type={post.type} />;
        });

        return (
            <React.Fragment>
                <Navbar />
                <Container className={styles.container}>
                    <h1 className={styles.lead}>{this.state.title}</h1>
                    <h5 style={{ fontWeight: '400' }}>{this.state.subtitle}</h5>
                    <p className={styles.authinfo}>{this.state.author}, {this.state.date}</p>
                    <Image className={styles.fullpostimg} src={this.state.image} fluid />
                    <div className={styles.postcontent} id="content">
                    </div>
                </Container>

                <div style={{ background: '#dddddd', }}>
                    <h1 className="py-5" style={{ textAlign: 'center' }}>Read our top posts</h1>
                    <div style={{ margin: '0 auto', width: '100%', padding: '0% 5% 5%', display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
                        {posts}
                    </div>
                </div>
                <Footer />
            </React.Fragment >
        );
    }
}

export default Fullpost;