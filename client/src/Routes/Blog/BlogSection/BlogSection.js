import React from 'react';
// import { Link } from 'react-router-dom';
import Post from '../../../components/Post/Post';
import styles from './BlogSection.module.css'

const BlogSection = (props) => {

    return (
        <div className={styles.zigzag}>
            <Post posttype="Poem" postid="1" />
            <Post posttype="Poem" postid="1" />
            <Post posttype="Poem" postid="1" />
            <Post posttype="Poem" postid="1" />
        </div>
    )
}


export default BlogSection