import React from 'react';
import Hero from './Components/Hero'
import Nav from './Components/Nav';
import Footer from './Components/Footer';
import About from './Components/About';
import Portfolio from './Components/Portfolio';

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render(){
    return (
      <div>
        <Nav />
        <Hero name="Katrina Po" header="Front End Developer | JavaScript, React.js"/>
        <About aboutText="I am a Front End Developer who is passionate about coding modern, user-friendly and aesthetically appealing user interfaces!
                    When I am not coding I enjoy salsa dancing, music, coffee and fitness ! " />
        <Portfolio />
        <Footer />
      </div>
    );
  }
}

export default App;
