import React from 'react';
import tachyons from 'tachyons';
import './styles.css';
import image from './componentImgs/kp.jpg';
import resume from './PoKatrinaFrontEndDeveloper2021.pdf';


const Hero = (props) => {
    
    return (
        <div>
            <div className="container pt6">
                <header class="tc ph4">
                <div class="tc pa4">
                    <img src={image} class="br-100 pa1 ba b--black-10 h4 w4" alt="avatar" />
                </div>
                <h1 class="f3 f2-m f1-l fw2 black-90 mv3 tracking-in-contract-bck playfairFont">
                    {props.name}
                </h1>
                <h2 class="f5 f4-m f3-l fw2 black-50 mt0 lh-copy text-focus-in">
                    {props.header}
                </h2>
                <div class="flex items-center justify-center pa0.5">
                <a href={resume} target="_blank" class="f5 no-underline black bg-animate hover-bg-black hover-white inline-flex items-center pa2 ba border-box mr3">
                    <span class="pl1 amikoFont">Download Resume</span>
                </a>
                </div>
                </header>
            </div>
        </div>
    )
}
export default Hero;
