import React from 'react';
import { Link } from 'react-router-dom';
import profilePic from '.././assets/profilepic.jpg';
import logo from '.././assets/kp.png';

const Contact = () => {
    return (
        <div>
            <div className="tc pt4">
            <img
                src={logo}
                class="h3 w3 dib text-focus-in" alt="avatar"/>
            <article class="athelas pa4">
                <h1 class="f3 f2-m f1-l fw2 black-90 mv3 slide-in-left">
                    Want to say hi?
                </h1>
                <h1 class="f3 f2-m f1-l fw2 black-90 mv3 slide-in-left"> 👋 ✉️</h1>
                <p class="f6 f4-ns lh-copy measure center">
                  You can reach me directly by email at emailkatrinapo@gmail.com.
                </p>

                <p class="f6 f4-ns lh-copy measure center">
                   Or connect with me through any of my channels in the links below. I would love to hear about any cool projects you're working on and how we can collaborate!
                </p>
            </article>

            <div className="tc pt0 pb5">
                <Link to='../'><a class="f5 link b hover-green no-underline black dib ph2 pv1">home</a></Link>
                <Link to='/about'><a class="f5 link b hover-light-red no-underline black dib ph2 pv1">about</a></Link>
                <Link to='/portfolio'><a class="f5 link b hover-light-purple no-underline black dib ph2 pv1">portfolio</a></Link>
                <Link to='./contact'><a class="f5 link b hover-black no-underline gold dib ph2 pv1" target="_blank" href="#">contact</a></Link>
                <a class="f5 link b hover-blue no-underline black dib ph2 pv1" target="_blank" href="https://www.linkedin.com/in/katrinapo">linkedin</a>
                <a class="f5 link b hover-light-blue no-underline black dib ph2 pv1" target="_blank" href="https://github.com/katrinapo?tab=repositories">github</a>
                <a class="f5 link b hover-light-red no-underline black dib ph2 pv1" href="mailto:emailkatrinapo@gmail.com">email</a>
                <a class="f5 link b hover-pink no-underline black dib ph2 pv1" target="_blank" href="https://www.instagram.com/katrinaa.po/">instagram</a>
                <a class="f5 link b hover-light-purple no-underline black dib ph2 pv1" target="_blank" href="https://katrinabpo.com/">blog</a>
            </div>
        </div>
        </div>
    )
}

export default Contact;
