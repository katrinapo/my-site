import React from 'react';
import profilePic from '.././assets/profilepic.jpg';
import logo from '.././assets/kp.png';
import { Link } from 'react-router-dom';

const About = () => {
    return (
    <div className="tc pt3">
            <img
                src={logo}
                class="h3 w3 dib text-focus-in" alt="avatar"/>
            <article class="athelas pa4">
                <h1 class="f3 f2-m f1-l fw2 black-90 mv3 slide-in-left">
                    A little bit about me...
                </h1>
                <div class="pa3">
                    <img
                        src={profilePic}
                        class="br-100 ba h4 dib" alt="avatar" />
                </div>
                <p class="f6 f4-ns lh-copy measure center">
                    Hello 👋 ! I am Katrina Po and I am a Developer by day and Salsa Dancer by night! I am excited about technology with a particular interest in Web Development and UI/UX!
                </p>

                <p class="f6 f4-ns lh-copy measure center">
                   I'm a recent graduate of Centennial College's Software Engineering Technician program. Technologies I work with include but aren't exclusive to : HTML5, CSS3, JavaScript, ES6, React, and Node.js.
                </p>
            </article>

            <div className="tc pt0 pb5">
                <Link to='../'><a class="f5 link b hover-green no-underline black dib ph2 pv1">home</a></Link>
                <Link to='/about'><a class="f5 link b hover-black no-underline light-red dib ph2 pv1">about</a></Link>
                <Link to='/portfolio'><a class="f5 link b hover-light-purple no-underline black dib ph2 pv1">portfolio</a></Link>
                <Link to='/contact'><a class="f5 link b hover-gold no-underline black dib ph2 pv1" target="_blank" href="#">contact</a></Link>
                <a class="f5 link b hover-blue no-underline black dib ph2 pv1" target="_blank" href="https://www.linkedin.com/in/katrinapo">linkedin</a>
                <a class="f5 link b hover-light-blue no-underline black dib ph2 pv1" target="_blank" href="https://github.com/katrinapo?tab=repositories">github</a>
                <a class="f5 link b hover-light-red no-underline black dib ph2 pv1" href="mailto:emailkatrinapo@gmail.com">email</a>
                <a class="f5 link b hover-pink no-underline black dib ph2 pv1" target="_blank" href="https://www.instagram.com/katrinaa.po/">instagram</a>
                <a class="f5 link b hover-light-purple no-underline black dib ph2 pv1" target="_blank" href="https://katrinabpo.com/">blog</a>
            </div>
        </div>
    )
}

export default About;
