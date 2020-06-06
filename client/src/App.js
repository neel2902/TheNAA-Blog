import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './Routes/Home/Home'
import About from './Routes/About/About'
import Blog from './Routes/Blog/Blog'
import Contact from './Routes/Contact/Contact'
import NoMatch from './Routes/NoMatch/NoMatch';
// import Admin from './Routes/Admin/Admin';
import Fullpost from './Routes/Fullpost/Fullpost';
// import Dashboard from './Routes/Admin/Dashboard';
// import ProtectedRoute from './Routes/ProtectedRoute';


const App = () => {
  return (
    <React.Fragment >
      <Router>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/about' component={About} />
          <Route path='/blog' component={Blog} />
          <Route path='/contact' component={Contact} />
          <Route path='/:posttype/:postid' component={Fullpost} />
          {/* <Route path='/admin' component={Admin} /> */}
          {/* <Route path='/dashboard' component={Dashboard} /> */}
          <Route path="*" component={NoMatch} />
        </Switch>
      </Router>
    </React.Fragment >
  );
}

export default App;
