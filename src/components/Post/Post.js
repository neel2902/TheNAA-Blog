import React from 'react';
import { Link } from 'react-router-dom';
// import { Card } from 'react-bootstrap';
// import styles from './Post.module.css';
import './Blogcard.css';
import { Button } from 'react-bootstrap';
const Post = (props) => {
    return (
        <div className={"blog-card " + props.alt}>
            <div className="meta">
                <div className="photo" style={{ backgroundImage: "url(https://storage.googleapis.com/chydlx/codepen/blog-cards/image-1.jpg)" }}></div>
                <ul className="details">
                    <li className="author"><a href="/">John Doe</a></li>
                    <li className="date">Aug 24, 2020</li>
                </ul>
            </div>
            <div className="description">
                <h1>Title</h1>
                <h2>Subtitle</h2>
                <p> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad eum dolorum architecto obcaecati enim dicta praesentium, quam nobis! Neque ad aliquam facilis numquam. Veritatis, sit.</p>
                <p className="read-more">
                    <Link to={"/" + props.posttype + "/" + props.postid} ><Button>Read More</Button></Link>
                </p>
            </div>
        </div >
    );
}

export default Post