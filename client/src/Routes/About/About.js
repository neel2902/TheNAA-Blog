import React from 'react';
import styles from './About.module.css';
import { Container } from 'react-bootstrap';
import Footer from '../../components/utilities/Footer/Footer';
import Navbar from '../../components/utilities/Navbar/Navbar';
import './Editor.css';

const Editor = (props) => {
    return (
        <figure class="snip1515">
            <div class="profile-image"><img src={props.image} alt="editor" className="teamimg" /></div>
            <figcaption>
                <h4>সহযোগী সম্পাদক</h4>
                <p>{props.quote}</p>
                <h3>{props.name}</h3>
                <h4>{props.role}</h4>
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
                    <h4>জিতুমণি নেওগ</h4>
                    <h6>মুখ্য সম্পাদক</h6>
                    <blockquote><i>কৰ’না মহামাৰীয়ে পৃথিৱীলৈ তাৎক্ষণিক পৰিবৰ্তন আনিলে ৷ সলনি কৰি দিলে মানুহৰ জীৱন ধাৰা ৷ এই সময় প্ৰত্যাহ্বানেৰে ভৰা ৷এই সময়ৰ ওপৰত লাহে গজি উঠা মানুহৰ বৰ্তমান আৰু ভবিষ্যবোৰকো লৈ স্পষ্ট ৰেখা অংকন কৰা অসম্ভৱ প্ৰায় ৷ সৌ সিদনা লৈকে বাতৰি কাকত ,আলোচনীৰ অৱিহনে জীয়াই থাকিব নোৱৰা পাঠক সমাজৰ জ্ঞান আৰু তথ্য অহৰণৰ উৎস হৈ পৰিল ডিজিটেল মাধ্যম ৷ অসমৰ কেইবাখনো প্ৰতিষ্ঠিত আলোচনীয়ে ছপা আখৰৰ মুদ্ৰণ বন্ধ কৰি ৰাখিব লগা হৈছে ৷ প্ৰিন্টং প্ৰেছবোৰৰ অৱস্হা তথৈবচ হৈ পৰিছে ৷ কৰ’নাই ছপা আলোচনীৰ যাত্ৰাক যেন স্হবিৰ কৰি পেলালে ৷ ছাত্ৰছাত্ৰী -শিক্ষক- শিক্ষয়িত্ৰী আৰু অভিভাৱকা প্ৰিয় আলোচনী " ন " ৰ প্ৰিন্টিং বন্ধ হৈ পৰিছে ৷ এনে সময়ত পাঠকসকলৰ কাষলৈ যোৱাৰ একমাত্ৰ মাধ্যম হৈ পৰিছে ডিজিটেল প্ৰকাশ ৷ সেয়ে "ন" আলোচনী প্ৰতিজন পাঠকৰ ম’বাইল বা কম্পিউটাৰ স্ক্ৰীনত সুলভ কৰি তুলিবলৈ thenaa.in ৱেবচাইট আৰম্ভ কৰিছো ৷ আগতে আমি মাহত এবাৰ পাঠক ৰাইজৰ কাষলৈ গৈছিলো ৷ এতিয়াৰ পৰা প্ৰতিক্ষণত আমি আপোনালোকৰ কাষত থাকিম ৷ছাত্ৰীছাত্ৰীসকল আগুৱাই নিব পৰাকৈ দৈনিক তথ্য সম্ভাৰ যোগান ধৰিম ৷ সাধাৰণ জ্ঞানৰ পৰা পাঠভিত্তিক জ্ঞান , কেৰিয়াৰ আদি সকলো বিষয় আপোনালকোৰ কাষলৈ নিয়াৰ চেষ্টা কৰিম ৷ "ন"ৰ এই ডিজিটেল যাত্ৰাত আপোনালোকৰ অকুণ্ঠ সহযোগিতা কামনা কৰিলো ৷
</i></blockquote>
                </div>
            </Container>
            <Container className="my-5">
                <h3 className="text-center thedteam">
                    <hr className="dos" />
                    সম্পাদনা কক্ষ
                    <hr className="dos" />
                </h3>
                <div className="d-flex mx-auto flex-wrap mt-3 justify-content-center">
                    <Editor name="দিব্যৰঞ্জণ বৰা" role="Editor" image={require('../../assets/images/dibya.jpeg')} />
                    <Editor name="হৰিপ্ৰসন্ন শইকীয়া" role="Editor" image={require('../../assets/images/hari.jpeg')} />
                    <Editor name="মৃদুল ফুকন" role="Editor" image={require('../../assets/images/mridul.jpeg')} />
                    <Editor name="জগত গগৈ" role="Editor" image={require('../../assets/images/jagat.jpeg')} />
                    <Editor name="সমীন কুমাৰ শইকীয়া" role="Editor" image={require('../../assets/images/xamin.jpeg')} />
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
                    <p>Submit articles at <a href="mailto:thenaanlp@gmail.com">THE NAA</a></p>
                </div>
            </div>
            <Footer />
        </section >
    )
}

export default About;