import React, { Component, Fragment } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from './components/common/Header';
import Home from './components/pages/Home/Home';
import Contact from './components/pages/Contact/Contact';
import Error from './components/pages/404/Error';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Fragment>
          <Header />
          <div className="main-wrapper">
            <Switch>
              <Route path="/" component={Home} exact />
              <Route path="/contact" component={Contact} />
              <Route component={Error} />
            </Switch>
          </div>
        </Fragment>
      </BrowserRouter>
    );
  }
}

export default App;