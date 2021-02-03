import React from 'react';
import youtubeClone from './youtubeclone.png';
import hiitify from './hiitify.png';

const Projects = () => {
  
    return (
        <div>
            <section class="mw7 center avenir">
            <h3 className="tc montFont">/ PROJECTS</h3>
            <article class="bb b--black-10 pv4 ph3">
                <div class="flex flex-column flex-row-ns">
                    <div class="pr3-ns mb4 mb0-ns w-100 w-40-ns">
                    <img src={hiitify} class="db" alt="first screen" />
                    </div>
                    <div class="w-100 w-60-ns pl3-ns">
                    <h1 class="f3 fw1 kristiFont2 mt0 lh-title">HIIT-ify</h1>
                    <p class="f6 f5-l lh-copy">
                    React.js application allowing the user to control their favourite Spotify tunes in the same application as a HIIT 
                    (High Intensity Interval Training) timer. The app retrieves data from the Spotify Web API upon user authentication.
                    </p>
                    <a class="f6 link dim br1 ph3 pv2 mb2 dib white bg-black" target="_blank" href="https://katrinapo.github.io/hiitify/">View Live</a>
                    <a class="f6 link dim br1 ph3 pv2 mb2 dib white bg-mid-gray" target="_blank" href="https://github.com/katrinapo/hiitify">View Code</a>
                    </div>
                </div>
            </article>
            <article class="bb b--black-10 pv4 ph3">
                <div class="flex flex-column flex-row-ns">
                    <div class="pr3-ns mb4 mb0-ns w-100 w-40-ns">
                    <img src={youtubeClone} class="db" alt="Photo of a whale's tale coming crashing out of the water." />
                    </div>
                    <div class="w-100 w-60-ns pl3-ns">
                    <h1 class="f3 fw1 kristiFont2 mt0 lh-title">YouTube Clone</h1>
                    <p class="f6 f5-l lh-copy">
                    React.js application that fetches data from the YouTube API and displays it to the browser based on user input.
                    </p>
                    <a class="f6 link dim br1 ph3 pv2 mb2 dib white bg-black" target="_blank" href="https://katrinapo.github.io/Youtube-Clone/">View Live</a>
                    <a class="f6 link dim br1 ph3 pv2 mb2 dib white bg-mid-gray" target="_blank" href="https://github.com/katrinapo/Youtube-Clone">View Code</a>
                    </div>
                </div>
            </article>
            </section>
        </div>
    )
    
}

export default Projects;
