import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
import axios from 'axios';
import Post from '../../../components/Post/Post';
import styles from './BlogSection.module.css'

class BlogSection extends Component {
    state = {
        posts: []
    }

    componentDidMount() {
        axios.get('/blogs/' + this.props.type)
            .then(res => {
                console.log(res.data);
                this.setState({
                    posts: res.data
                })
            })
            .catch(err => {
                console.error(err);
            })
    }
    render() {
        const posts = this.state.posts.map(post => {
            return <Post key={post._id} id={post._id} title={post.title} author={post.author} content={post.content} image={post.location} type={post.type} />;
        })
        return (
            <div className={styles.zigzag}>
                {posts}
            </div>
        )
    }
}


export default BlogSection;