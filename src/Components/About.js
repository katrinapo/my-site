import React from 'react'
import './styles.css';

const About = (props) => {
        return (
            <div>
                <div className="pt5">
                    <section class="mw5 mw7-ns center pa3 ph5-ns transparentWhiteBox">
                    <h3 class="mt0 montFont">/ ABOUT ME</h3>
                    <p class="lh-copy measure">
                    {props.aboutText}
                    </p>
                    </section>
                </div>
            </div>
        )
}

export default About
