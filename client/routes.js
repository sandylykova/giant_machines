import React, {Component} from 'react';
import {Route} from 'react-router-dom';
import {Projects} from './components';

class Routes extends Component {
  render() {
    return (
      <>
        {/* <Route path="/" component={Welcome} /> */}
        <Route path="/projects" component={Projects} />
      </>
    )
  }
}

export default Routes;
