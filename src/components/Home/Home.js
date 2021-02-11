import React from 'react';
import tachyons from 'tachyons';
import './styles.css';
import { Link } from 'react-router-dom';

import resume from '../../PoKatrinaFrontEndDeveloper2021.pdf';

const Home = (props) => {
    
    return (
        <div className="home-header">
            <div className="container pt5 pb5">
                <header class="tc ph4 pt6">
                    <h1 class="dim black-100 f-headline-ns tc db mb2  flip-scale-2-hor-bottom prataFont text-spaced">
                    Katrina Po
                    </h1>
                    <hr />
                    <h2 class="f5 f5-m f5-l fw2 black-50 mt0 pt2 lh-copy text-focus-in">
                    Front End Developer | JavaScript, React.js
                    </h2>
                    <div className="links-container tc slide-in-left">
                        <a class="f5 link b hover-blue no-underline black dib ph2 pv1" target="_blank" href="https://www.linkedin.com/in/katrinapo">linkedin</a>
                        <a class="f5 link b hover-light-blue no-underline black dib ph2 pv1" target="_blank" href="https://github.com/katrinapo?tab=repositories">github</a>
                        <Link to='/portfolio'><a class="f5 link b hover-green no-underline black dib ph2 pv1">portfolio</a></Link>
                        <a class="f5 link b hover-gold no-underline black dib ph2 pv1" target="_blank" href={resume}>resume</a>
                        <a class="f5 link b hover-light-red no-underline black dib ph2 pv1" href="mailto:emailkatrinapo@gmail.com">email</a>
                        <a class="f5 link b hover-pink no-underline black dib ph2 pv1" target="_blank" href="https://www.instagram.com/katrinaa.po/">instagram</a>
                        <a class="f5 link b hover-light-purple no-underline black dib ph2 pv1" target="_blank" href="https://katrinabpo.com/">blog</a>
                    </div>
                </header>
            </div>
        </div>
    )
}
export default Home;
