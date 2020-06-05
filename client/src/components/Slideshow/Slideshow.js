import React from 'react';
import 'swiper/css/swiper.css';
import Swiper from 'react-id-swiper';
import './Slideshow.css';
import slide1 from '../../assets/images/slide1.jpg';




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
        <div className="swipercontainer">
            <Swiper {...SlideshowConfigs}>
                {/* <div style={{ backgroundImage: 'url(http://lorempixel.com/600/600/nature/1' }} className={styles.slide} />
            <div style={{ backgroundImage: 'url(http://lorempixel.com/600/600/nature/2' }} className={styles.slide} />
            <div style={{ backgroundImage: 'url(http://lorempixel.com/600/600/nature/3' }} className={styles.slide} />
            <div style={{ backgroundImage: 'url(http://lorempixel.com/600/600/nature/4' }} className={styles.slide} />
        <div style={{ backgroundImage: 'url(http://lorempixel.com/600/600/nature/5' }} className={styles.slide} /> */}
                <div className="myslide" style={{ backgroundImage: `url(${require("../../assets/images/slide1.jpg")})` }}>
                </div>
                <div className="myslide" style={{ backgroundImage: `url(${require("../../assets/images/slide2.jpg")})` }}>
                </div>
                <div className="myslide" style={{ backgroundImage: `url(${require("../../assets/images/slide3.jpg")})` }}>
                </div>
                <div className="myslide" style={{ backgroundImage: `url(${require("../../assets/images/slide4.jpg")})` }}>
                </div>
            </Swiper >
        </div>
    );
}
export default Slideshow;