import React from 'react';
import './styles.css';
import resume from './PoKatrinaFrontEndDeveloper2021.pdf';

class Nav extends React.Component {
    render() {
    return (
        <div>
            <header class="fixed w-100 ph3 pv3 pv4-ns ph4-m ph5-l">
                <nav class="f6 fw6 ttu tracked montFont">
                    <a class="link dim black dib mr3" target="_blank" href="https://www.linkedin.com/in/katrinapo" title="Home">LinkedIn</a>
                    <a class="link dim black dib mr3" target="_blank" href="https://github.com/katrinapo?tab=repositories" title="About">GitHub</a>
                    <a class="link dim black dib mr3" target="_blank" href={resume} title="Home">Resume</a>
                </nav>
            </header>
        </div>
    )};
}

export default Nav
