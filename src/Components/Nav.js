import React from 'react';
import './styles.css';
import resume from './PoKatrinaFrontEndDeveloper2021.pdf';

const Nav = () => {
    return (
        <div>
            <header class="fixed w-100 ph3 pv3 pv4-ns ph4-m ph5-l transparentBox">
                <nav class="f6 fw4 ttu tracked">
                    <a class="link dim black dib mr3" target="_blank" href="https://www.linkedin.com/in/katrinapo" title="Home">LinkedIn</a>
                    <a class="link dim black dib mr3" target="_blank" href="https://github.com/katrinapo?tab=repositories" title="About">GitHub</a>
                    <a class="link dim black dib mr3" target="_blank" href={resume} title="Home">Resume</a>
                </nav>
            </header>
        </div>
    )};


export default Nav;
