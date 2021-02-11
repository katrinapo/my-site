import React, { useState } from 'react';
import './styles.css';
import CarouselSlide from './CarouselSlide';
import { SLIDE_INFO } from './constants';
import logo from './kp.png';
import { Link } from 'react-router-dom';

import resume from '../../PoKatrinaFrontEndDeveloper2021.pdf';

import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

function Arrow(props) {
    const { direction, clickFunction } = props;
    const icon = direction === 'left' ? <FaChevronLeft /> : <FaChevronRight />;
    return <div onClick={clickFunction}>{icon}</div>;
}

const Portfolio = () => {
    const [index, setIndex] = useState(0);
    const content = SLIDE_INFO[index];
    const numSlides = SLIDE_INFO.length;

    const onArrowClick = (direction) => {
        const increment = direction === 'left' ? -1 : 1;
        const newIndex = (index + increment + numSlides) % numSlides;
        setIndex(newIndex);
    };

    return (
        <div className="tc"> 
        <div class="pt5 tc">
        <img
            src={logo}
            class="h3 w3 dib" alt="avatar"/>
        </div>
            <div className="portfolio-container pa3">
                <Arrow
                        direction='left'
                        clickFunction={() => onArrowClick('left')}
                    />
                    <CarouselSlide content={content} />
                    <Arrow
                        direction='right'
                        clickFunction={() => onArrowClick('right')}
                    />
            </div>

            <div className="links-container tc pa4">
                    <Link to='../'><a class="f5 link b hover-green no-underline black dib ph2 pv1">home</a></Link>
                    <a class="f5 link b hover-blue no-underline black dib ph2 pv1" target="_blank" href="https://www.linkedin.com/in/katrinapo">linkedin</a>
                    <a class="f5 link b hover-light-blue no-underline black dib ph2 pv1" target="_blank" href="https://github.com/katrinapo?tab=repositories">github</a>
                    <a class="f5 link b hover-gold no-underline black dib ph2 pv1" target="_blank" href={resume}>resume</a>
                    <a class="f5 link b hover-light-red no-underline black dib ph2 pv1" href="mailto:emailkatrinapo@gmail.com">email</a>
                    <a class="f5 link b hover-pink no-underline black dib ph2 pv1" target="_blank" href="https://www.instagram.com/katrinaa.po/">instagram</a>
                    <a class="f5 link b hover-light-purple no-underline black dib ph2 pv1" target="_blank" href="https://katrinabpo.com/">blog</a>
            </div>
        </div>
    )
}

export default Portfolio;
