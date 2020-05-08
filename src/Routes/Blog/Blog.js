import React from 'react';
import styles from './Blog.module.css';
import Navbar from '../../components/utilities/Navbar/Navbar';
import { Tabs, Tab } from 'react-bootstrap';
const Blog = () => {
    return (
        <div>
            <Navbar />
            <Tabs defaultActiveKey="stories" id="uncontrolled-tab-example">
                <Tab eventKey="stories" title="Stories">
                    <h1>a list of stories here</h1>
                </Tab>
                <Tab eventKey="articles" title="Articles">
                    <h1>A list of articles here</h1>
                </Tab>
                <Tab eventKey="fiction" title="Poem">
                    <h1>A list of poems here</h1>
                </Tab>
            </Tabs>
        </div>
    )
}


export default Blog;