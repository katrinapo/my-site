import React, { Component } from 'react';
import './styles.css';

class Portfolio extends Component {
    render() {
        return (
            <div>
                <section class="cf pt3 pr6 pl6">
                    <h3 className="tc montFont">/ PROJECTS</h3>
                    <div class="fl w-100 w-50-m w-25-l bg-black-10 tc pv4">
                        NOTUBEREATS
                        <div>
                        <p>React.js application that allows user to enter recipe information and saves it to the database.</p>
                        <a class="f6 link dim br1 ph3 pv2 mb2 dib white bg-black" target="_blank" href="https://katrinapo.github.io/firebase_crud/">View Live</a>
                        <a class="f6 link dim br1 ph3 pv2 mb2 dib white bg-mid-gray" target="_blank" href="https://github.com/katrinapo/firebase_crud">View Code</a>
                        </div>
                    </div>
                    <div class="fl w-100 w-50-m w-25-l bg-black-05 tc pv4">
                        YOUTUBE CLONE
                        <div>
                        <p>React.js application that fetches data from the YouTube API and displays it to the browser based on user input.</p>
                        <a class="f6 link dim br1 ph3 pv2 mb2 dib white bg-black" target="_blank" href="https://katrinapo.github.io/React-Fetch-Videos-From-YoutubeAPI/">View Live</a>
                        <a class="f6 link dim br1 ph3 pv2 mb2 dib white bg-mid-gray" target="_blank" href="https://github.com/katrinapo/React-Fetch-Videos-From-YoutubeAPI">View Code</a>
                        </div>
                    </div>
                    <div class="fl w-100 w-50-m w-25-l bg-black-20 tc pv4">
                        LOCATION FETCHER
                        <div>
                        <p>React.js application that displays a message depending on the user's location.</p>
                        <a class="f6 link dim br1 ph3 pv2 mb2 dib white bg-black" target="_blank" href="https://katrinapo.github.io/React-get-user-location/">View Live</a>
                        <a class="f6 link dim br1 ph3 pv2 mb2 dib white bg-mid-gray" target="_blank" href="https://github.com/katrinapo/React-get-user-location">View Code</a>
                        </div>
                    </div>
                    <div class="fl w-100 w-50-m w-25-l bg-black-30 tc pv4">
                        ROBOFRIENDS
                        <div>
                        <p>React.js application that fetches API data and filters data based on user input.</p>
                        <a class="f6 link dim br1 ph3 pv2 mb2 dib white bg-black" target="_blank" href="https://katrinapo.github.io/React-filter-fetchAPI-data/">View Live</a>
                        <a class="f6 link dim br1 ph3 pv2 mb2 dib white bg-mid-gray" target="_blank" href="https://github.com/katrinapo/React-filter-fetchAPI-data">View Code</a>
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}

export default Portfolio;
