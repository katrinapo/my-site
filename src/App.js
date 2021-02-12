import React from 'react';
import Home from './components/Home/Home';
import About from './components/About/About';
import Portfolio from './components/Portfolio/Portfolio';
import Contact from './components/Contact/Contact';
import './App.css';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';

const App = () => {
    return (
      <Router>
         <div>
          <Switch>
            <Route path ="/" exact component={Home}/>
            <Route path ="/about" exact component={About}/>
            <Route path ="/portfolio" component={Portfolio}/>
            <Route path ="/contact" component={Contact}/>
          </Switch>
        </div>  
      </Router>

    );
}

export default App;
