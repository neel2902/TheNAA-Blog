import React from 'react';
import { Image, Container } from 'react-bootstrap';
import Navbar from '../../components/utilities/Navbar/Navbar'
import styles from './Fullpost.module.css'
import Footer from '../../components/utilities/Footer/Footer'

const Fullpost = () => {
    return (
        <React.Fragment>
            <Navbar />
            <Container className={styles.container}>
                <h1 className={styles.lead}>Heading here</h1>
                <p className={styles.authinfo}>Author, 23 Aug 2020</p>
                <Image className={styles.fullpostimg} src="https://images.pexels.com/photos/36717/amazing-animal-beautiful-beautifull.jpg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" fluid />
                <div className={styles.postcontent}>
                    <p>Sunt esse consectetur officia do do dolore. Lorem aliqua ipsum reprehenderit voluptate enim cillum deserunt duis minim ad cillum consectetur in. Proident adipisicing ad exercitation ad est. Aliquip amet exercitation ex reprehenderit adipisicing mollit adipisicing aliquip anim adipisicing commodo. Enim est do et exercitation mollit id mollit est duis.</p>
                    <p>
                        Fugiat ut labore esse eiusmod culpa ut veniam id occaecat fugiat irure. Cillum id deserunt cupidatat dolore veniam incididunt esse. Qui sit proident aute anim incididunt est irure culpa duis Lorem cillum reprehenderit. Veniam Lorem cupidatat eu nisi proident. Ipsum officia commodo non aliquip. Non adipisicing esse sunt ipsum enim minim. In ipsum elit eu aute. Sunt ipsum cupidatat Lorem pariatur velit. Irure aliquip eiusmod qui enim ullamco deserunt ad mollit Lorem cillum mollit. Sit minim magna cillum esse nostrud nostrud. Lorem qui veniam sit minim ea cupidatat occaecat esse fugiat commodo sunt. Lorem est in proident cupidatat consequat magna occaecat pariatur sunt magna. Aute voluptate proident dolor officia proident et enim laboris ex magna elit. Occaecat aliqua magna occaecat ipsum quis Lorem consectetur aliquip incididunt nostrud officia labore. Ullamco culpa occaecat aliqua laborum et sit veniam. Ea irure tempor consequat ea id non commodo duis. Id veniam adipisicing in aliquip Lorem enim eu anim eu id. Magna nisi cillum laboris velit enim cillum aute ut deserunt. Nisi deserunt adipisicing fugiat ut cupidatat excepteur anim aliqua qui deserunt Lorem labore officia. Consectetur labore veniam proident elit tempor culpa proident excepteur ex nostrud excepteur ad proident duis.Nostrud elit ea do labore ea aute. Nulla mollit veniam consectetur anim ipsum aute ut. Dolore incididunt veniam anim incididunt dolore.
                    </p>
                    <p>
                        Fugiat ut labore esse eiusmod culpa ut veniam id occaecat fugiat irure. Cillum id deserunt cupidatat dolore veniam incididunt esse. Qui sit proident aute anim incididunt est irure culpa duis Lorem cillum reprehenderit. Veniam Lorem cupidatat eu nisi proident. Ipsum officia commodo non aliquip. Non adipisicing esse sunt ipsum enim minim. In ipsum elit eu aute. Sunt ipsum cupidatat Lorem pariatur velit. Irure aliquip eiusmod qui enim ullamco deserunt ad mollit Lorem cillum mollit. Sit minim magna cillum esse nostrud nostrud. Lorem qui veniam sit minim ea cupidatat occaecat esse fugiat commodo sunt. Lorem est in proident cupidatat consequat magna occaecat pariatur sunt magna. Aute voluptate proident dolor officia proident et enim laboris ex magna elit. Occaecat aliqua magna occaecat ipsum quis Lorem consectetur aliquip incididunt nostrud officia labore. Ullamco culpa occaecat aliqua laborum et sit veniam. Ea irure tempor consequat ea id non commodo duis. Id veniam adipisicing in aliquip Lorem enim eu anim eu id. Magna nisi cillum laboris velit enim cillum aute ut deserunt. Nisi deserunt adipisicing fugiat ut cupidatat excepteur anim aliqua qui deserunt Lorem labore officia. Consectetur labore veniam proident elit tempor culpa proident excepteur ex nostrud excepteur ad proident duis.Nostrud elit ea do labore ea aute. Nulla mollit veniam consectetur anim ipsum aute ut. Dolore incididunt veniam anim incididunt dolore.
                    </p>
                    <p>
                        Fugiat ut labore esse eiusmod culpa ut veniam id occaecat fugiat irure. Cillum id deserunt cupidatat dolore veniam incididunt esse. Qui sit proident aute anim incididunt est irure culpa duis Lorem cillum reprehenderit. Veniam Lorem cupidatat eu nisi proident. Ipsum officia commodo non aliquip. Non adipisicing esse sunt ipsum enim minim. In ipsum elit eu aute. Sunt ipsum cupidatat Lorem pariatur velit. Irure aliquip eiusmod qui enim ullamco deserunt ad mollit Lorem cillum mollit. Sit minim magna cillum esse nostrud nostrud. Lorem qui veniam sit minim ea cupidatat occaecat esse fugiat commodo sunt. Lorem est in proident cupidatat consequat magna occaecat pariatur sunt magna. Aute voluptate proident dolor officia proident et enim laboris ex magna elit. Occaecat aliqua magna occaecat ipsum quis Lorem consectetur aliquip incididunt nostrud officia labore. Ullamco culpa occaecat aliqua laborum et sit veniam. Ea irure tempor consequat ea id non commodo duis. Id veniam adipisicing in aliquip Lorem enim eu anim eu id. Magna nisi cillum laboris velit enim cillum aute ut deserunt. Nisi deserunt adipisicing fugiat ut cupidatat excepteur anim aliqua qui deserunt Lorem labore officia. Consectetur labore veniam proident elit tempor culpa proident excepteur ex nostrud excepteur ad proident duis.Nostrud elit ea do labore ea aute. Nulla mollit veniam consectetur anim ipsum aute ut. Dolore incididunt veniam anim incididunt dolore.
                    </p>
                    <p>Ad aute dolor do tempor qui eu labore. Irure cillum duis dolore anim culpa cillum. Sit velit ad amet cupidatat officia pariatur Lorem amet est mollit in. Eu culpa duis est pariatur velit duis amet. Et culpa cillum Lorem consequat. Anim aliqua laborum eu cupidatat ea nulla sunt deserunt. Laborum adipisicing aute ut ut est dolore veniam ut adipisicing dolore dolore voluptate mollit.</p>
                </div>
            </Container>
            <Footer />
        </React.Fragment>
    )
}

export default Fullpost;