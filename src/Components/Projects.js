import React from 'react';
import notUber from './notuber.png';
import robo from './robo.png';
import youtubeClone from './youtubeclone.png';
import brew from './brew.png';
import bracket from './bracket.png';

class Projects extends React.Component {
    render() {
    return (
        <div>
            <section class="mw7 center avenir">
            <h3 className="tc montFont">/ PROJECTS</h3>
            <article class="bt bb b--black-10 pv4 ph3">
                <div class="flex flex-column flex-row-ns">
                    <div class="pr3-ns mb4 mb0-ns w-100 w-40-ns">
                    <img src={notUber} class="db" alt="Photo of a dimly lit room with a computer interface terminal." />
                    </div>
                    <div class="w-100 w-60-ns pl3-ns">
                    <h1 class="f3 fw1 kristiFont2 mt0 lh-title">NotUberEats</h1>
                    <p class="f6 f5-l lh-copy">
                    React.js application that allows user to enter recipe information and saves it to the database.
                    </p>
                    <a class="f6 link dim br1 ph3 pv2 mb2 dib white bg-black" target="_blank" href="https://katrinapo.github.io/firebase_crud/">View Live</a>
                        <a class="f6 link dim br1 ph3 pv2 mb2 dib white bg-mid-gray" target="_blank" href="https://github.com/katrinapo/firebase_crud">View Code</a>
                    </div>
                </div>
            </article>
            <article class="bb b--black-10 pv4 ph3">
                <div class="flex flex-column flex-row-ns">
                    <div class="pr3-ns mb4 mb0-ns w-100 w-40-ns">
                    <img src={bracket} class="db" alt="Photo of a warehouse with stacked shelves." />
                    </div>
                    <div class="w-100 w-60-ns pl3-ns">
                    <h1 class="f3 fw1 kristiFont2 mt0 lh-title">Location Fetcher</h1>
                    <p class="f6 f5-l lh-copy">
                    React.js application that displays a message depending on the user's location.
                    </p>
                    <a class="f6 link dim br1 ph3 pv2 mb2 dib white bg-black" target="_blank" href="https://katrinapo.github.io/React-get-user-location/">View Live</a>
                    <a class="f6 link dim br1 ph3 pv2 mb2 dib white bg-mid-gray" target="_blank" href="https://github.com/katrinapo/React-get-user-location">View Code</a>
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
                    <a class="f6 link dim br1 ph3 pv2 mb2 dib white bg-black" target="_blank" href="https://katrinapo.github.io/React-Fetch-Videos-From-YoutubeAPI/">View Live</a>
                    <a class="f6 link dim br1 ph3 pv2 mb2 dib white bg-mid-gray" target="_blank" href="https://github.com/katrinapo/React-Fetch-Videos-From-YoutubeAPI">View Code</a>
                    </div>
                </div>
            </article>
            <article class="bb b--black-10 pv4 ph3">
                <div class="flex flex-column flex-row-ns">
                    <div class="pr3-ns mb4 mb0-ns w-100 w-40-ns">
                    <img src={robo} class="db" alt="Photo of a whale's tale coming crashing out of the water." />
                    </div>
                    <div class="w-100 w-60-ns pl3-ns">
                    <h1 class="f3 fw1 kristiFont2 mt0 lh-title">RoboFriends</h1>
                    <p class="f6 f5-l lh-copy">
                    React.js application that fetches API data and filters data based on user input.
                    </p>
                    <a class="f6 link dim br1 ph3 pv2 mb2 dib white bg-black" target="_blank" href="https://katrinapo.github.io/React-filter-fetchAPI-data/">View Live</a>
                        <a class="f6 link dim br1 ph3 pv2 mb2 dib white bg-mid-gray" target="_blank" href="https://github.com/katrinapo/React-filter-fetchAPI-data">View Code</a>
                    </div>
                </div>
            </article>
            </section>
        </div>
    )
    }
}

export default Projects;
