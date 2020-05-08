import React from 'react';
import 'swiper/css/swiper.css';
import Swiper from 'react-id-swiper';

import styles from './Slideshow.module.css';

const SlideshowConfigs = {
    containerClass: 'swiper-container myslide',
    slidesPerView: 'auto',
    autoplay: {
        delay: 5000,
        disableOnInteraction: false
    },
    effect: 'coverflow',
    grabCursor: true,
    centeredSlides: true,
    coverflowEffect: {
        rotate: 50,
        stretch: 10,
        depth: 100,
        modifier: 2,
        slideShadows: false
    },
    loop: true,
    pagination: {
        el: '.swiper-pagination',
        clickable: true
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
    }
}

const Slideshow = () => {
    return (
        <div className={styles.swipercontainer}>
            <Swiper {...SlideshowConfigs}>
                {/* <div style={{ backgroundImage: 'url(http://lorempixel.com/600/600/nature/1' }} className={styles.slide} />
            <div style={{ backgroundImage: 'url(http://lorempixel.com/600/600/nature/2' }} className={styles.slide} />
            <div style={{ backgroundImage: 'url(http://lorempixel.com/600/600/nature/3' }} className={styles.slide} />
            <div style={{ backgroundImage: 'url(http://lorempixel.com/600/600/nature/4' }} className={styles.slide} />
        <div style={{ backgroundImage: 'url(http://lorempixel.com/600/600/nature/5' }} className={styles.slide} /> */}
                <div className={styles.myslide} style={{ backgroundImage: 'url(http://lorempixel.com/600/600/nature/1' }}>
                    <div className={styles.desc}>
                        <h1>This is a slide</h1>
                        <p>This is its description</p>
                    </div>
                </div>
                <div className={styles.myslide} style={{ backgroundImage: 'url(http://lorempixel.com/600/600/nature/2' }}>
                    <div className={styles.desc}>
                        <h1>This is a slide</h1>
                        <p>This is its description</p>
                    </div>
                </div>
                <div className={styles.myslide} style={{ backgroundImage: 'url(http://lorempixel.com/600/600/nature/3' }}>
                    <div className={styles.desc}>
                        <h1>This is a slide</h1>
                        <p>This is its description</p>
                    </div>
                </div>
                <div className={styles.myslide} style={{ backgroundImage: 'url(http://lorempixel.com/600/600/nature/4' }}>
                    <div className={styles.desc}>
                        <h1>This is a slide</h1>
                        <p>This is its description</p>
                    </div>
                </div>
                <div className={styles.myslide} style={{ backgroundImage: 'url(https://image.freepik.com/free-vector/futuristic-medical-infographic-with-details_23-2148521124.jpg)' }}>
                    <div className={styles.desc}>
                        <h1>This is a slide</h1>
                        <p>This is its description</p>
                    </div>
                </div>
            </Swiper >
        </div>
    );
}
export default Slideshow;