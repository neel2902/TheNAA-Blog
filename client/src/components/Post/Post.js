import React from 'react';
import { Link } from 'react-router-dom';
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
                    <li className="date">Aug 24, 2020</li>
                </ul>
            </div>
            <div className="description">
                <h1>{props.title}</h1>
                <h2>{props.subtitle}</h2>
                <p style={{ overflow: 'hidden' }}>{props.content}</p>
                <p className="read-more">
                    <Link to={"/" + props.type + "/" + props.id} ><Button>Read More</Button></Link>
                </p>
            </div>
        </div >
    );
}

export default Post