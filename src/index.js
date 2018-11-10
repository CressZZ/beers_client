import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Home, Beers } from './pages';
import './index.css';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
    <Router>
      <div>
        <Route exact path="/" component={Home} />
        <Route exact path="/beer_list" component={Beers} />

      </div>
    </Router>,
    document.getElementById('root')
  )

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.register();
