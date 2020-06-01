import React, { Component } from 'react';
import axios from 'axios';
import { Image, Container } from 'react-bootstrap';
import Navbar from '../../components/utilities/Navbar/Navbar';
import styles from './Fullpost.module.css';
import Footer from '../../components/utilities/Footer/Footer';

class Fullpost extends Component {
    state = {
        postId: '',
        title: '',
        type: '',
        subtitle: '',
        author: '',
        views: 0,
        content: '',
        date: ''
    }

    componentDidMount() {
        const url = window.location.href;
        const postUrl = url.split('/').slice(3).join('/');
        console.log(postUrl);

        axios.get('/blog/' + postUrl)
            .then(res => {
                const unixTimeStamp = res.data.date_uploaded;
                const date = new Date(unixTimeStamp * 1000).toDateString();

                this.setState({
                    postId: res.data._id,
                    title: res.data.title,
                    type: res.data.type,
                    subtitle: res.data.subtitle,
                    author: res.data.author,
                    views: res.data.views,
                    content: res.data.content,
                    date: date
                });
            })
            .catch(err => {
                console.error(err);
            }
            );
    }

    render() {
        return (
            <React.Fragment>
                <Navbar />
                <Container className={styles.container}>
                    <h1 className={styles.lead}>{this.state.title}</h1>
                    <h5 style={{ fontWeight: '400' }}>{this.state.subtitle}</h5>
                    <p className={styles.authinfo}>{this.state.author}, {this.state.date}</p>
                    <Image className={styles.fullpostimg} src="https://images.pexels.com/photos/36717/amazing-animal-beautiful-beautifull.jpg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" fluid />
                    <div className={styles.postcontent}>
                        {this.state.content}
                    </div>
                </Container>
                <Footer />
            </React.Fragment>
        );
    }
}

export default Fullpost;