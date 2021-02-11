import React from 'react';
import Home from './components/Home/Home';
import Portfolio from './components/Portfolio/Portfolio';
import './App.css';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';

const App = () => {
    return (
      <Router>
         <div>
          <Switch>
            <Route path ="/" exact component={Home}/>
            <Route path ="/portfolio" component={Portfolio}/>
          </Switch>
        </div>  
      </Router>

    );
}

export default App;
