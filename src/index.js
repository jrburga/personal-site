import React, {Component} from 'react';
import ReactDOM from 'react-dom';
// import { Router, Route, browserHistory } from 'react-router';

import { BrowserRouter, /* Link, */Route, Switch } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';

import './index.css';

import { Navbar, NavItem, Nav} from 'react-bootstrap';

import registerServiceWorker from './registerServiceWorker';

// ReactDOM.render(<App />, document.getElementById('root'));

//components
// import Game from './components/tictactoe.js'
import Residents from './routes/residents'

class Welcome extends Component {
  render () {
    return (
      <p>Hello, {this.props.match.params.name}</p>
    )
  }
}

ReactDOM.render((
  <div>
  <Navbar>
  	<Nav>
  		<NavItem eventKey={1} href="/about">About</NavItem>
      <NavItem eventKey={4} href="/residents">Residents</NavItem>
  	</Nav>
  </Navbar>
  <BrowserRouter>
  	<Switch>
      <Route path="/welcome/:name" component={Welcome} />
      <Route path="/residents" component={Residents} />
  	</Switch>
  </BrowserRouter>
  </div>
), document.getElementById('root'))
registerServiceWorker();