import React, { Component } from 'react';
import Navbar from '../../components/utilities/Navbar/Navbar';
import Slideshow from '../../components/Slideshow/Slideshow';
import Post from '../../components/Post/Post';
import { Link } from 'react-router-dom';
import { Container, Button } from 'react-bootstrap';
import Footer from '../../components/utilities/Footer/Footer';
import styles from './Home.module.css';
import MetaTags from 'react-meta-tags';


const axios = require('axios').default;
const Features = () => {
    return (
        <div style={{ width: '70%', margin: '0 auto' }}>
            <hr className="featurette-divider my-5" />

            <div className="row featurette">
                <div className="col-md-7">
                    <p className="lead">ছাত্ৰছাত্ৰীসকলক নতুন সংকল্প গঠনেৰে আগুৱাই যোৱাত &quot;ন&quot; সহায় কৰিব ৷ ইয়াৰ
                    বাবে শৈক্ষিক দিশৰ অনুপ্ৰেৰণা মূলক প্ৰতিবেদনৰ সম্ভাৰ নিয়মীয়াকৈ প্ৰকাশ
কৰা হ’ব ৷</p>
                </div>
                <div className="col-md-5">
                    <img src={require('../../assets/images/section1.jpg')} className={styles.homeimg} alt='' />
                </div>
            </div>

            <hr className="featurette-divider my-5" />

            <div className="row featurette">
                <div className="col-md-7 order-md-2">
                    <p className="lead">বিদ্যালয়ৰ পৰীক্ষাৰ পৰা ধৰি সৰ্বভাৰতীয় পৰীক্ষাসমূহলৈ বিভিন্ন পৰীক্ষাৰ বাবে
                    কেনেকৈ চলাব লাগিব প্ৰস্তুতি -এই বিষয়ে অভিজ্ঞসকলৰ সাক্ষাৎকাৰ আৰু
                    বিশেষ লেখাৰ যোগান ধৰা হ’ব ৷</p>
                </div>
                <div className="col-md-5 order-md-1">
                    <img src={require('../../assets/images/section2.jpg')} className={styles.homeimg} alt='' />
                </div>
            </div>

            <hr className="featurette-divider my-5" />

            <div className="row featurette">
                <div className="col-md-7">
                    <p className="lead">দেশবিদেশত কি ঘটিছে -বিজ্ঞান -সাহিত্যৰ পৰা গণিটলৈকে সকোলোবোৰ খবৰ
                    নিয়মীয়াকৈ লাভ কৰিব ৷ইংৰাজী ভাষা শিকা আৰু অসমীয়া ভাষা শুদ্ধ ৰূপত লিখাৰ
ওপৰত থাকিব প্ৰয়োজনীয় লেখা ৷</p>
                </div>
                <div className="col-md-5">
                    <img src={require('../../assets/images/section3.jpg')} className={styles.homeimg} alt='' />
                </div>
            </div>

            <hr className="featurette-divider my-5" />
        </div>
    )
}

class Home extends Component {
    state = {
        posts: []
    }

    componentDidMount() {
        axios.get('/topblogs')
            .then((response) => {
                this.setState({ posts: response.data });
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    render() {
        const posts = this.state.posts.map(post => {

            const date = new Date(post.date_uploaded).toDateString();
            return <Post key={post._id} id={post._id} title={post.title} subtitle={post.subtitle} author={post.author} content={post.content} date={date} image={post.location} type={post.type} />;
        });
        return (
            <div style={{ backgroundColor: 'white' }}>
                <MetaTags>
                    <meta id="title" property="og:title" content="THE NAA" />
                    <meta property="og:description" content="ন - নতুন চিন্তাৰ খোৰাক দিয়াৰ এক প্ৰয়াস " />
                    <meta id="home-image" property="og:image" content="http://www.thenaa.in/static/media/thenaalogo.f921b688.png" />
                    <meta property="og:url" content="http://www.thenaa.in/" />
                    <meta name="twitter:card" content="summary_large_image" />
                </MetaTags>
                <Navbar />
                <Slideshow />
                <Features />
                <div style={{ background: '#dddddd', }}>
                    <h1 className="py-5" style={{ textAlign: 'center' }}>Read our top posts</h1>
                    <div style={{ margin: '0 auto', width: '100%', padding: '0% 5% 5%', display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
                        {posts}
                    </div>
                    <div className="text-center py-3">
                        <Link to='/blog'>
                            <Button variant="success">Read All Posts</Button>
                        </Link>
                    </div>
                </div>
                <Footer />
            </div>
        );
    }
}

export default Home;