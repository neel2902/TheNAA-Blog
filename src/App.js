import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './Routes/Home/Home'
import About from './Routes/About/About'
import Blog from './Routes/Blog/Blog'
import Contact from './Routes/Contact/Contact'
import NoMatch from './Routes/NoMatch/NoMatch'


class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Router>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/about' component={About} />
            <Route path='/blog' component={Blog} />
            <Route path='/contact' component={Contact} />
            <Route component={NoMatch} />
          </Switch>
        </Router>
      </React.Fragment>
    );
  }
}

export default App;
