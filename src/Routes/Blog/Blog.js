import React from 'react';
// import styles from './Blog.module.css';
import Navbar from '../../components/utilities/Navbar/Navbar';
import { Tabs, Tab } from 'react-bootstrap';
import BlogSection from './BlogSection/BlogSection'

const Blog = () => {

    const stylesTab = {
        margin: '0',
        padding: '10px',
        background: 'linear-gradient(to bottom right, rgb(255,159,178), rgb(251,220,226))'
    }

    const pinkyboi = {
        background: '#b8f2e6'
    }
    const blockdiv = {
        display: 'flex',
        flexDirection: 'row'
    }

    return (
        <div>
            <Navbar />
            <Tabs defaultActiveKey="stories" id="uncontrolled-tab-example" style={pinkyboi}>
                <Tab eventKey="stories" title="Stories" style={stylesTab}>
                    <div className="text-center">
                        <h1>This is nice</h1>
                    </div>
                    <div style={blockdiv}>
                        <BlogSection />
                    </div>
                </Tab>
                <Tab eventKey="articles" title="Articles" style={stylesTab}>
                    <div className="text-center">
                        <h1>This is not nice</h1>
                    </div>
                    <div style={blockdiv}>
                        <BlogSection />
                    </div>
                </Tab>
                <Tab eventKey="poems" title="Poems" style={stylesTab}>
                    <div className="text-center">
                        <h1>This is very nice</h1>
                    </div>
                    <div style={blockdiv}>
                        <BlogSection />
                    </div>
                </Tab>
            </Tabs>
        </div>
    )
}


export default Blog;