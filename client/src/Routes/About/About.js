import React from 'react';
import styles from './About.module.css';
import { Container } from 'react-bootstrap';
import Footer from '../../components/utilities/Footer/Footer';
import Navbar from '../../components/utilities/Navbar/Navbar';
import './Editor.css';

const Editor = (props) => {
    return (
        <figure class="snip1515">
            <div class="profile-image"><img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sample47.jpg" alt="sample47" /></div>
            <figcaption>
                <h3>{props.name}</h3>
                <h4>{props.role}</h4>
                <p>{props.quote}</p>
            </figcaption>
        </figure>
    );
}

const About = () => {
    return (
        <section className={styles.texture}>
            <Navbar />
            <Container fluid className={styles.bgabout}>
                {/* <h2>About NAA</h2> */}
            </Container>
            <h3 className="text-center thedteam my-5">
                <hr className="dos" />
                    Message From the Editor-In-Chief
                    <hr className="dos" />
            </h3>
            <Container className={styles.editorcont}>
                <div className={styles.editorialImage}></div>
                <div className={styles.desc}>
                    <h4>Nilkamal Thakuria</h4>
                    <h6>Editor-in-chief</h6>
                    <blockquote><i>Nisi reprehenderit occaecat minim Lorem. Fugiat ullamco mollit ea dolor ex incididunt incididunt ea eu ut. Tempor officia irure pariatur cupidatat. Ipsum eu dolor commodo magna voluptate labore tempor dolor magna qui voluptate. Exercitation id officia exercitation pariatur amet nulla consectetur et cupidatat consequat do officia enim. Sit mollit et consequat qui elit nulla do incididunt incididunt qui ullamco. Sit Lorem exercitation velit Lorem pariatur exercitation excepteur pariatur consectetur quis.</i></blockquote>
                </div>
            </Container>
            <Container className="my-5">
                <h3 className="text-center thedteam">
                    <hr className="dos" />
                    The Editorial Team
                    <hr className="dos" />
                </h3>
                <div className="d-flex mx-auto flex-wrap mt-3 justify-content-center">
                    <Editor name="Nilkamal Thakuria" role="Editor" quote="Lorem ipsum dolor sit amet" />
                    <Editor name="Nilkamal Thakuria" role="Editor" quote="Lorem ipsum dolor sit amet" />
                    <Editor name="Nilkamal Thakuria" role="Editor" quote="Lorem ipsum dolor sit amet" />
                    <Editor name="Rajababu Saikia" role="Admin" quote="Loremc hgcsava ytacfsyascf" />
                    <Editor name="Nilkamal Thakuria" role="Editor" quote="Lorem ipsum dolor sit amet" />
                    <Editor name="Nilkamal Thakuria" role="Editor" quote="Lorem ipsum dolor sit amet" />
                </div>
            </Container>
            <div className={styles.git}>
                <h3 className="text-center thedteam">
                    <hr className="dos" />
                    Get in touch
                    <hr className="dos" />
                </h3>
                <div>
                    <p>Drop an email at <a href="mailto:thenaanlp@gmail.com">THE NAA</a></p>
                    <p>Call us at +91 00000 00000</p>
                    <p>Submit articles at <a href="mailto:thenaanlp@gmail.com">THE NAA</a></p>
                </div>
            </div>
            <Footer />
        </section >
    )
}

export default About;