import React from 'react';
// import { Card } from 'react-bootstrap';
// import styles from './Post.module.css';
import './Blogcard.css';
import { Button } from 'react-bootstrap';
const Post = (props) => {
    return (
        <div className={"blog-card "}>
            <div className="meta">
                <div className="photo" style={{ backgroundImage: `url(${props.image})` }}></div>
                <ul className="details">
                    <li className="author"><a href="/">{props.author}</a></li>
                    <li className="date">{props.date}</li>
                </ul>
            </div>
            <div className="description">
                <h1>{props.title}</h1>
                <p>{props.subtitle}</p>
                <p className="read-more">
                    <a href={"/" + props.type + "/" + props.id} ><Button>Read More</Button></a>
                </p>
            </div>
        </div >
    );
}

export default Post;